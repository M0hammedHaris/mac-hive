import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Advantages />
      <Portfolio />
      <CTA />
    </div>
  );
}
