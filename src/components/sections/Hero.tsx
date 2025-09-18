"use client";

import Image from "next/image";
import Link from "next/link";
import BackgroundElements from "../BackgroundElements";
import Typewriter from "../TypeWriter";
import { useMediaQuery } from "@siberiacancode/reactuse";
import { motion } from "framer-motion";

const Hero = () => {
  const matches = useMediaQuery("(min-width: 960px)");

  return (
    <div className="cells-pattern relative flex h-screen w-full flex-col items-center justify-center gap-5 overflow-clip rounded-3xl border border-[#ccc] px-5 sm:gap-8 sm:px-8">
      {matches && <BackgroundElements />}

      {/* Main contents with z-index 50 */}
      <div className="relative z-50 flex flex-col items-center justify-center gap-5 pointer-events-none">
        <div className="flex aspect-square w-26 items-center justify-center rounded-3xl bg-gradient-to-br from-50% from-[#ffffff] to-100% to-[#c4c4c4] shadow-[11.26px_11.26px_30.03px_0_rgba(0,0,0,0.35)] sm:w-[142px]">
          <Image
            src={"/logo.png"}
            alt="logo showing 🤨"
            width={67}
            height={67}
            priority
            className="h-16 w-16 sm:h-24 sm:w-24"
          />
        </div>

        <motion.h1
          className="text-center font-bold text-4xl sm:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typewriter text="Reflect, Strategize, and Monitor" />
          <span className="blinking-cursor">|</span>
          <br />
          <span className="font-medium text-muted-foreground">
            all in one place
          </span>
        </motion.h1>

        <p className="text-center text-xl sm:text-2xl">
          Effectively organize your tasks and enhance productivity.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link className=" pointer-events-auto" href="/">
            <Image
              width={150}
              height={50}
              className="h-[50px] w-[150px] sm:h-[60px] sm:w-[180px]"
              alt="App Store download button"
              src={"/app-store.svg"}
            />
          </Link>
          <Link className="pointer-events-auto" href="/">
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
    </div>
  );
};

export default Hero;
