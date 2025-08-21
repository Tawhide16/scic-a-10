import dbConnect from "@/lib/dbConnect";

export default async function ProductHighlights() {
  // Connect to DB + get collection
  const productsCollection = await dbConnect("Products");

  // Fetch products
  const products = await productsCollection.find({}).toArray();
  console.log(products);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0,6).map((product) => (
            <div
              key={product._id.toString()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center"
            >
              <img
                src={product.imageUrl} // Fix: use imageUrl from DB
                alt={product.name}
                className="w-full h-52 sm:h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-3">
                {product.description}
              </p>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                ${product.price?.$numberDouble ?? product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
