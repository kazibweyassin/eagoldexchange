import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Fetch from database
    const listings = await prisma.goldListing.findMany({
      where: { available: true },
      include: { 
        supplier: {
          select: {
            name: true,
            trustScore: true,
            verified: true,
            location: true,
            businessName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Transform data to match frontend expectations
    const transformedListings = listings.map(listing => ({
      id: listing.id,
      goldType: listing.goldType,
      purity: listing.purity,
      quantity: listing.quantity,
      pricePerOz: listing.pricePerOz,
      location: listing.location,
      description: listing.description || "",
      available: listing.available,
      supplier: {
        name: listing.supplier.businessName || listing.supplier.name || "Unknown Supplier",
        trustScore: listing.supplier.trustScore,
        verified: listing.supplier.verified,
        location: listing.supplier.location || listing.location
      },
      createdAt: listing.createdAt.toISOString()
    }));

    return NextResponse.json(transformedListings);
  } catch (error) {
    console.error("Error fetching gold listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch gold listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // For now, create a default user if none exists (in production, get from session)
    let defaultUser = await prisma.user.findFirst({
      where: { email: "demo@goldexchange.com" }
    });
    
    if (!defaultUser) {
      defaultUser = await prisma.user.create({
        data: {
          email: "demo@goldexchange.com",
          name: "Demo Supplier",
          userType: "SUPPLIER",
          businessName: "Your Company",
          verified: true,
          trustScore: 95,
          location: body.location
        }
      });
    }
    
    // Create new listing in database
    const newListing = await prisma.goldListing.create({
      data: {
        supplierId: defaultUser.id,
        goldType: body.goldType,
        purity: parseFloat(body.purity),
        quantity: parseFloat(body.quantity),
        pricePerOz: parseFloat(body.pricePerOz),
        location: body.location,
        description: body.description || "",
        available: true
      },
      include: {
        supplier: {
          select: {
            name: true,
            trustScore: true,
            verified: true,
            location: true,
            businessName: true
          }
        }
      }
    });
    
    // Transform response to match frontend expectations
    const transformedListing = {
      id: newListing.id,
      goldType: newListing.goldType,
      purity: newListing.purity,
      quantity: newListing.quantity,
      pricePerOz: newListing.pricePerOz,
      location: newListing.location,
      description: newListing.description || "",
      available: newListing.available,
      supplier: {
        name: newListing.supplier.businessName || newListing.supplier.name || "Unknown Supplier",
        trustScore: newListing.supplier.trustScore,
        verified: newListing.supplier.verified,
        location: newListing.supplier.location || newListing.location
      },
      createdAt: newListing.createdAt.toISOString()
    };
    
    console.log("New gold listing created in database:", transformedListing);

    return NextResponse.json({ 
      success: true, 
      message: "Listing created successfully",
      listing: transformedListing 
    });
  } catch (error) {
    console.error("Error creating gold listing:", error);
    return NextResponse.json(
      { error: "Failed to create gold listing" },
      { status: 500 }
    );
  }
}
