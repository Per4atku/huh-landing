import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col px-5 gap-5 items-center justify-center h-screen w-full cells-pattern rounded-3xl border border-[#ccc] overflow-clip sm:px-8 sm:gap-8">
      <div className="flex shadow-[11.26px_11.26px_30.03px_0_rgba(0,0,0,0.35)] justify-center items-center w-26 aspect-square bg-gradient-to-br from-[#ffffff] from-50% to-100% to-[#c4c4c4] rounded-3xl sm:w-[142px]">
        <Image
          src={"/logo.png"}
          alt="logo showing 🤨"
          width={67}
          height={67}
          priority
          className="w-24 h-24"
        />
      </div>
      <h1 className="text-3xl font-bold text-center sm:text-6xl">
        Reflect, Strategize, and Monitor <br />
        <span className="text-muted-foreground font-medium">
          all in one place
        </span>
      </h1>
      <p className="text-center text-lg sm:text-2xl">
        Effectively organize your tasks and enhance productivity.
      </p>
      <div className="flex gap-2 flex-col sm:flex-row">
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
