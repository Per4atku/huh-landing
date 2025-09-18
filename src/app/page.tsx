import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper maxWidth={1200}>
        <Hero />
      </MaxWidthWrapper>
    </main>
  );
}
