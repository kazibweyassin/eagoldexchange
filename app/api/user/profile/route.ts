import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
        location: true,
        phone: true,
        whatsapp: true,
        businessName: true,
        licenseNumber: true,
        verified: true,
        trustScore: true,
        image: true,
        createdAt: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch user profile" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      userType,
      location,
      phone,
      whatsapp,
      businessName,
      licenseNumber
    } = body;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name,
        userType,
        location,
        phone,
        whatsapp,
        businessName,
        licenseNumber,
        updatedAt: new Date()
      },
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
        location: true,
        phone: true,
        whatsapp: true,
        businessName: true,
        licenseNumber: true,
        verified: true,
        trustScore: true,
        image: true,
        updatedAt: true
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: "Profile updated successfully",
      user: updatedUser 
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      { error: "Failed to update user profile" },
      { status: 500 }
    );
  }
}
