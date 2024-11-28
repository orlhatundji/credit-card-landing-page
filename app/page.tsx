
// Components
import Brands from "@/components/Brands";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <Features />
        <Brands />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
