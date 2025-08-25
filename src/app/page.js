import Image from "next/image";
import Hero from "./Components/Hero";
import ProductHighlights from "./Components/ProductHighlights";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
