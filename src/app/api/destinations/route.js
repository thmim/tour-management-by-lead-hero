import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

// GET all destinations with optional filters and pagination
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Filters
    const whereTo = searchParams.get("whereTo");
    const date = searchParams.get("date");
    const guest = searchParams.get("guest");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const types = searchParams.get("types");

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "9");
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db("destinationDB");
    const query = {};

    // Build query based on filters
    if (whereTo) {
      query["itinerary.stop_name"] = new RegExp(whereTo, 'i');
    }
    if (date) {
      query["availability"] = date;
    }
    if (guest) {
      query["maxGuests"] = { $gte: Number(guest) };
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (types) {
      const typesArray = types.split(",").filter(Boolean);
      if (typesArray.length > 0) {
        query.category = { $in: typesArray };
      }
    }

    // Get total count for pagination
    const totalCount = await db.collection("destinations").countDocuments(query);

    // Fetch destinations with pagination
    const destinations = await db
      .collection("destinations")
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      destinations,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    });

  } catch (error) {
    console.error("Error fetching destinations:", error);
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}

// POST new destination (protected)
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const newTour = await req.json();

    const client = await clientPromise;
    const db = client.db("destinationDB");

    const result = await db.collection("destinations").insertOne({
      ...newTour,
      createdBy: session.user.email,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });

  } catch (error) {
    console.error("Error adding destination:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add destination" },
      { status: 500 }
    );
  }
}