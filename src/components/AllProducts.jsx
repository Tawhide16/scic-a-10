// app/components/AllProducts.jsx
import dbConnect from "@/lib/dbConnect";
import Link from "next/link";

export default async function AllProducts() {
  const productsCollection = await dbConnect("Products");
  const products = await productsCollection.find({}).toArray();

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product._id.toString()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-52 sm:h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-3">
                {product.description}
              </p>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                ${product.price?.$numberDouble ?? product.price}
              </span>

              {/* Details Button */}
              <Link
                href={`/product/${product._id.toString()}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
