import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid destination ID" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("destinationDB");

    const destination = await db
      .collection("destinations")
      .findOne({ _id: new ObjectId(id) });

    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);

  } catch (error) {
    console.error("Error fetching destination details:", error);
    return NextResponse.json(
      { error: "Failed to fetch destination details" },
      { status: 500 }
    );
  }
}