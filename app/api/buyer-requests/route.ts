import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Fetch from database
    const requests = await prisma.buyerRequest.findMany({
      where: { active: true },
      include: { 
        buyer: {
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
    const transformedRequests = requests.map(request => ({
      id: request.id,
      goldType: request.goldType,
      minPurity: request.minPurity,
      maxPurity: request.maxPurity,
      quantity: request.quantity,
      maxPricePerOz: request.maxPricePerOz,
      location: request.location || "",
      timeline: request.timeline || "",
      description: request.description || "",
      buyer: {
        name: request.buyer.businessName || request.buyer.name || "Unknown Buyer",
        trustScore: request.buyer.trustScore,
        verified: request.buyer.verified,
        location: request.buyer.location || request.location || ""
      },
      createdAt: request.createdAt.toISOString()
    }));

    return NextResponse.json(transformedRequests);
  } catch (error) {
    console.error("Error fetching buyer requests:", error);
    return NextResponse.json(
      { error: "Failed to fetch buyer requests" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Create or find a default user (in production, get from session)
    let defaultUser = await prisma.user.findFirst({
      where: { email: "default@buyer.com" }
    });

    if (!defaultUser) {
      defaultUser = await prisma.user.create({
        data: {
          email: "default@buyer.com",
          name: "Default Buyer",
          businessName: "Professional Buyer",
          trustScore: 95,
          verified: true,
          location: body.location || "Global",
          userType: "BUYER"
        }
      });
    }
    
    // Create new buyer request in database
    const newRequest = await prisma.buyerRequest.create({
      data: {
        goldType: body.goldType,
        minPurity: body.minPurity,
        maxPurity: body.maxPurity,
        quantity: body.quantity,
        maxPricePerOz: body.maxPricePerOz,
        location: body.location || "",
        timeline: body.timeline || "",
        description: body.description || "",
        buyerId: defaultUser.id,
        active: true
      },
      include: {
        buyer: {
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

    // Transform for frontend
    const transformedRequest = {
      id: newRequest.id,
      goldType: newRequest.goldType,
      minPurity: newRequest.minPurity,
      maxPurity: newRequest.maxPurity,
      quantity: newRequest.quantity,
      maxPricePerOz: newRequest.maxPricePerOz,
      location: newRequest.location || "",
      timeline: newRequest.timeline || "",
      description: newRequest.description || "",
      buyer: {
        name: newRequest.buyer.businessName || newRequest.buyer.name || "Unknown Buyer",
        trustScore: newRequest.buyer.trustScore,
        verified: newRequest.buyer.verified,
        location: newRequest.buyer.location || newRequest.location || ""
      },
      createdAt: newRequest.createdAt.toISOString()
    };
    
    console.log("New buyer request created:", transformedRequest);

    return NextResponse.json({ 
      success: true, 
      message: "Request created successfully",
      request: transformedRequest 
    });
  } catch (error) {
    console.error("Error creating buyer request:", error);
    return NextResponse.json(
      { error: "Failed to create buyer request" },
      { status: 500 }
    );
  }
}
