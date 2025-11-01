import clientPromise from '@/lib/mongodb';
import React from 'react';

const getTours=async(location)=>{
    const locationQuery=location;
    const client = await clientPromise;
    const db = client.db("destinationDB");
    

    const allTours = await db
      .collection("tours").find({
  location: { $regex: new RegExp("^" + locationQuery+ "$", "i") },
}).toArray()
console.log(allTours)
}

const Page =async({params}) => {
    const resolvedParams = await params;
  const { location } = resolvedParams;
  console.log(location)

  const allToursnfo = await getTours(location);
    

    return (
        <div>
            helloo
        </div>
    );
}

export default Page;
