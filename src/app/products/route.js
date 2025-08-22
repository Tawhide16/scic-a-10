"use server";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const collection = dbConnect("Products");
    const products = await collection.find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const product = await req.json();
    const collection = dbConnect("Products");
    const result = await collection.insertOne(product);
    return new Response(JSON.stringify({ success: true, id: result.insertedId }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
