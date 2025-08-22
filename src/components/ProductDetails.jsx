"use client"; // make this a client component for interactivity
import { useState } from "react";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Server-side fetching (you can also move this to a server component)
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
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {product.description}
      </p>
      <span className="text-xl font-bold mb-4 block">
        ${product.price?.$numberDouble ?? product.price}
      </span>

      {/* Add Product Button */}
      <AddProductButton product={product} />

      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

// Client-side button component
function AddProductButton({ product }) {
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    setLoading(true);
    try {
      await axios.post("/api/add-product", product); // make sure this API exists
      toast.success("Product added successfully!"); // ✅ toast success
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product!"); // ✅ toast error
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddProduct}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Adding..." : "Add Product"}
    </button>
  );
}
