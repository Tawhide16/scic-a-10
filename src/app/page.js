import Image from "next/image";
import Hero from "./Components/Hero";
import ProductHighlights from "./Components/ProductHighlights";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
      <Footer></Footer>
    </div>
  );
}
