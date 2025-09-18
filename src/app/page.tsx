import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Demo from "@/components/sections/Demo";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper maxWidth={8000}>
        <Hero />
        <MaxWidthWrapper maxWidth={1200}>
          <Demo />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </main>
  );
}
