import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const product = await req.json();
    const collection = await dbConnect("Cart"); // or wherever you want to store
    const result = await collection.insertOne(product);
    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}
