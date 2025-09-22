import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Demo from "@/components/sections/Demo";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="scroll-container" maxWidth={8000}>
        <Hero />
        <MaxWidthWrapper maxWidth={1200}>
          <Demo />
          <Features />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </main>
  );
}
