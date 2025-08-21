import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = params; // URL parameter
  const productsCollection = await dbConnect("Products");

  let product = null;

  try {
    product = await productsCollection.findOne({ _id: new ObjectId(id) });
  } catch (err) {
    console.error("Invalid ID:", err);
  }

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-500">
        Product not found
      </div>
    );
  }

  // Convert MongoDB data to normal JSON-friendly format
  const safeProduct = {
    ...product,
    _id: product._id.toString(),
    price: product.price?.$numberDouble ?? product.price,
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{safeProduct.name}</h1>

      <div className="relative w-full h-64 mb-4">
        <Image
          src={safeProduct.imageUrl}
          alt={safeProduct.name}
          fill
          style={{ objectFit: "cover", borderRadius: "0.5rem" }}
          priority={true} // makes the main image load faster
        />
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {safeProduct.description}
      </p>

      <span className="text-xl font-bold">${safeProduct.price}</span>
    </div>
  );
}
