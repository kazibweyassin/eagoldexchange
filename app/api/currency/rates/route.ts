import { NextRequest, NextResponse } from "next/server";

// Mock currency rates - replace with actual API integration
const MOCK_RATES = {
  UGX: 3700, // Ugandan Shilling
  EUR: 0.92, // Euro
};

export async function GET(request: NextRequest) {
  try {
    // In production, fetch from currency API
    // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    // const data = await response.json();
    
    return NextResponse.json(MOCK_RATES);
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return NextResponse.json(
      { error: "Failed to fetch currency rates" },
      { status: 500 }
    );
  }
}
