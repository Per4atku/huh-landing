import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Demo from "@/components/sections/Demo";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="scroll-container" maxWidth={8000}>
        <Hero />
        <MaxWidthWrapper maxWidth={1200}>
          <Demo />
          <Features />
          <Pricing />
        </MaxWidthWrapper>
        <Footer />
      </MaxWidthWrapper>
    </main>
  );
}
