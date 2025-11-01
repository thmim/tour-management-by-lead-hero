import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import AllDestinationDetailsClient from "@/Components/AllDestinationDetailsClient";


async function getDestination(id) {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const client = await clientPromise;
    const db = client.db("destinationDB");

    const destination = await db
      .collection("destinations")
      .findOne({ _id: new ObjectId(id) });

    return destination ? JSON.parse(JSON.stringify(destination)) : null;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
}

export default async function DestinationDetailsPage({ params }) {
  // Fix for Next.js 15 - await params
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const destinationInfo = await getDestination(id);
  

  if (!destinationInfo) {
    notFound();
  }

  return (
      <div><AllDestinationDetailsClient destinationInfo={destinationInfo}></AllDestinationDetailsClient></div>

  );
}