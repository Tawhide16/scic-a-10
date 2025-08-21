import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function ProductDetails({ params }) {
  const { id } = params;
  const productsCollection = await dbConnect("Products");

  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-2">{product.description}</p>
      <span className="text-xl font-bold">
        ${product.price?.$numberDouble ?? product.price}
      </span>
    </div>
  );
}
