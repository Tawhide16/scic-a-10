"use client";
import { useState, useEffect } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    if (res.ok) {
      const data = await res.json();
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Product added!");
      setForm({ name: "", description: "", price: "" });
      fetchProducts();
    } else {
      alert("Error adding product!");
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="p-2 border" required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="p-2 border" required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} className="p-2 border" required />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Product</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">All Products</h2>
      <div className="flex flex-col gap-4">
        {products.length === 0 && <p>No products found</p>}
        {products.map((prod) => (
          <div key={prod._id} className="p-4 border rounded">
            <h3 className="font-bold">{prod.name}</h3>
            <p>{prod.description}</p>
            <p className="font-semibold">Price: ${prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
