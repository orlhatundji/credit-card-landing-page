
// Components
import Brands from "@/components/Brands";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pt-0 pb-20">
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
