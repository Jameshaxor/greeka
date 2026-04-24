import { Hero } from "@/components/Sections/Hero";
import { Problem } from "@/components/Sections/Problem";
import { MenuFeatures } from "@/components/Sections/MenuFeatures";
import { Testimonial } from "@/components/Sections/Testimonial";
import { Footer } from "@/components/Sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Hero />
        <Problem />
        <MenuFeatures />
        <Testimonial />
      </div>
      <div className="w-full relative z-10">
        <Footer />
      </div>
    </main>
  );
}
