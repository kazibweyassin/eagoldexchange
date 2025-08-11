import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Mock data for demonstration - replace with actual Metals API integration
const MOCK_GOLD_PRICE = {
  price: 2024.50,
  change24h: 1.25,
  lastUpdate: new Date().toISOString(),
  source: "Metals API"
};

export async function GET(request: NextRequest) {
  try {
    // In production, fetch from Metals API
    // const response = await fetch(`https://metals-api.com/api/latest?access_key=${process.env.METALS_API_KEY}&base=USD&symbols=XAU`);
    // const data = await response.json();
    
    // Save to price history
    await prisma.priceHistory.create({
      data: {
        price: MOCK_GOLD_PRICE.price,
        source: MOCK_GOLD_PRICE.source,
        currency: "USD",
        timestamp: new Date(),
      },
    });

    return NextResponse.json(MOCK_GOLD_PRICE);
  } catch (error) {
    console.error("Error fetching gold price:", error);
    return NextResponse.json(
      { error: "Failed to fetch gold price" },
      { status: 500 }
    );
  }
}
