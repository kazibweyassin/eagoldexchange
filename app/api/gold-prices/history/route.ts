import { NextRequest, NextResponse }    // If no historical data, generate mock data
    if (chartData.length === 0) {
      // Define the type for our data points
      interface PriceDataPoint {
        timestamp: string;
        price: number;
        date: string;
      }
      
      // Initialize mockData with the correct type
      const mockData: PriceDataPoint[] = [];
      const basePrice = 2024.50;
      
      for (let i = hoursBack; i >= 0; i--) {
        const date = new Date();
        date.setHours(date.getHours() - i);
        
        mockData.push({
          timestamp: date.toISOString(),
          price: basePrice + (Math.random() - 0.5) * 50,
          date: date.toLocaleDateString(),
        });
      }ver";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timeframe = searchParams.get("timeframe") || "1D";

    let hoursBack = 24; // Default 1 day
    if (timeframe === "7D") hoursBack = 24 * 7;
    if (timeframe === "30D") hoursBack = 24 * 30;

    const startDate = new Date();
    startDate.setHours(startDate.getHours() - hoursBack);

    const priceHistory = await prisma.priceHistory.findMany({
      where: {
        timestamp: {
          gte: startDate,
        },
      },
      orderBy: {
        timestamp: "asc",
      },
      take: 100, // Limit results for performance
    });

    // Transform data for chart
    const chartData = priceHistory.map((record) => ({
      timestamp: record.timestamp.toISOString(),
      price: record.price,
      date: record.timestamp.toLocaleDateString(),
    }));

    // If no historical data, generate mock data
    if (chartData.length === 0) {
      const mockData: { timestamp: string; price: number; date: string }[] = [];
      const basePrice = 2024.50;
      
      for (let i = hoursBack; i >= 0; i--) {
        const date = new Date();
        date.setHours(date.getHours() - i);
        
        mockData.push({
          timestamp: date.toISOString(),
          price: basePrice + (Math.random() - 0.5) * 50,
          date: date.toLocaleDateString(),
        });
      }
      
      return NextResponse.json(mockData);
    }

    return NextResponse.json(chartData);
  } catch (error) {
    console.error("Error fetching price history:", error);
    return NextResponse.json(
      { error: "Failed to fetch price history" },
      { status: 500 }
    );
  }
}
