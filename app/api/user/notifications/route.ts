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
      include: {
        notificationPreferences: true
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create default preferences if they don't exist
    if (!user.notificationPreferences) {
      const defaultPreferences = await prisma.notificationPreference.create({
        data: {
          userId: user.id,
          emailNotifications: true,
          pushNotifications: true,
          smsNotifications: false,
          newListings: true,
          priceAlerts: true,
          transactions: true,
          messages: true
        }
      });
      
      return NextResponse.json({ preferences: defaultPreferences });
    }

    return NextResponse.json({ preferences: user.notificationPreferences });
  } catch (error) {
    console.error("Error fetching notification preferences:", error);
    return NextResponse.json(
      { error: "Failed to fetch notification preferences" },
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
      emailNotifications,
      pushNotifications,
      smsNotifications,
      newListings,
      priceAlerts,
      transactions,
      messages
    } = body;

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedPreferences = await prisma.notificationPreference.upsert({
      where: { userId: user.id },
      create: {
        userId: user.id,
        emailNotifications,
        pushNotifications,
        smsNotifications,
        newListings,
        priceAlerts,
        transactions,
        messages
      },
      update: {
        emailNotifications,
        pushNotifications,
        smsNotifications,
        newListings,
        priceAlerts,
        transactions,
        messages
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: "Notification preferences updated successfully",
      preferences: updatedPreferences 
    });
  } catch (error) {
    console.error("Error updating notification preferences:", error);
    return NextResponse.json(
      { error: "Failed to update notification preferences" },
      { status: 500 }
    );
  }
}
