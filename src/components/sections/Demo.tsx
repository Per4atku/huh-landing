"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <div className="snap-section relative h-svh flex flex-col items-center justify-center gap-14 overflow-y-scroll">
      {/* Heading + small dash image */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl text-center sm:text-5xl">
          Make your life way
          <br /> more <span className="font-bold">productive</span>
        </h2>
        <motion.div
          className="absolute right-0 sm:w-[241px] sm:right-5"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          style={{ originX: 0 }}
        >
          <Image
            src="/dash.png"
            width={176}
            height={25}
            alt="dash"
            className="w-auto h-auto sm:w-[241px]"
          />
        </motion.div>
      </motion.div>

      {/* App demo image */}
      <motion.div
        className="relative w-[90%] max-w-[1228px] aspect-[1228/745]"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <Image
          src="/app-demo.png"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1228px) 80vw, 1228px"
          style={{ objectFit: "contain" }}
          alt="Demo of the App"
        />
      </motion.div>
    </div>
  );
};

export default Demo;
