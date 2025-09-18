import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="cells-pattern flex h-screen w-full flex-col items-center justify-center gap-5 overflow-clip rounded-3xl border border-[#ccc] px-5 sm:gap-8 sm:px-8">
      <div className="flex aspect-square w-26 items-center justify-center rounded-3xl bg-gradient-to-br from-50% from-[#ffffff] to-100% to-[#c4c4c4] shadow-[11.26px_11.26px_30.03px_0_rgba(0,0,0,0.35)] sm:w-[142px]">
        <Image src={"/logo.png"} alt="logo showing 🤨" width={67} height={67} priority className="h-24 w-24" />
      </div>
      <h1 className="text-center font-bold text-3xl sm:text-6xl">
        Reflect, Strategize, and Monitor <br />
        <span className="font-medium text-muted-foreground">all in one place</span>
      </h1>
      <p className="text-center text-lg sm:text-2xl">Effectively organize your tasks and enhance productivity.</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link href="/" className="">
          <Image
            width={150}
            height={50}
            className="h-[50px] w-[150px] sm:h-[60px] sm:w-[180px]"
            alt="App Store download button"
            src={"/app-store.svg"}
          />
        </Link>
        <Link href="/">
          <Image
            height={50}
            width={150}
            className="h-[50px] w-[150px] sm:h-[60px] sm:w-[180px]"
            alt="Google Play download button"
            src={"/google-play.webp"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
