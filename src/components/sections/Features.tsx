"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import TemplateN from "../svg/TemplateN";
import { motion } from "framer-motion";

const GRID_ITEM_CLASSNAME =
  "w-full rounded-xl border border-gray-200 shadow-[1px_0_2px_rgba(0,0,0,0.25),-1px_0_2px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.25),0_-1px_2px_rgba(0,0,0,0.25)]";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Features = () => {
  return (
    <div className="snap-section relative h-svh flex flex-col items-center justify-center gap-14">
      <motion.div
        className="w-full grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3 sm:grid-rows-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Advanced Task Tracking */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "1px 0 2px rgba(0,0,0,0.25), -1px 0 2px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.25), 0 -1px 2px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-1 col-end-3 row-start-1 row-end-2 flex justify-between items-center pl-6 sm:row-start-2 sm:row-end-3 lg:h-[320px] overflow-hidden bg-white"
          )}
        >
          <div>
            <motion.h4
              className="font-semibold lg:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Advanced task tracking
            </motion.h4>
            <motion.p
              className="text-muted-foreground text-sm lg:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Manage projects smarter. Start now.
            </motion.p>
          </div>

          <motion.div
            className="relative h-full aspect-[490/361] max-w-[60%] max-h-[95%]"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/tracking.png"
              alt="Advanced Task Tracking"
              width={490}
              height={361}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Time Management Tools */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "1px 0 2px rgba(0,0,0,0.25), -1px 0 2px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.25), 0 -1px 2px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[205px] col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col justify-between items-center sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:h-[320px] overflow-hidden bg-white"
          )}
        >
          <motion.div
            className="relative max-w-[374px] h-[140px] lg:max-w-[600px] lg:h-[230px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/optimize.png"
              alt="Advanced Task Tracking"
              width={773}
              height={289}
              className="object-contain"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
            </div>
          </motion.div>

          <div className="text-center mb-2">
            <motion.h4
              className="font-semibold lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Time Management Tools
            </motion.h4>
            <motion.p
              className="text-muted-foreground text-sm lg:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Manage projects smarter. Start now.
            </motion.p>
          </div>
        </motion.div>

        {/* AI Integration */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "1px 0 2px rgba(0,0,0,0.25), -1px 0 2px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.25), 0 -1px 2px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-1 col-end-2 row-start-3 row-end-4 flex flex-col justify-between items-center sm:row-start-1 sm:row-end-2 lg:h-[320px] overflow-hidden bg-white"
          )}
        >
          <div className="text-center px-2 py-1 lg:px-6">
            <motion.h4
              className="font-semibold lg:text-3xl"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              AI Integration
            </motion.h4>
            <motion.p
              className="text-muted-foreground text-sm lg:text-base"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              AI knows your schedule even better than you do!
            </motion.p>
          </div>
          <motion.div
            className="relative max-w-[168px] h-[140px] lg:max-w-[250px] lg:h-[210px]"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          >
            <Image
              src="/ai.png"
              alt="AI assistant image"
              width={381}
              height={321}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Grab your Favourite */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "1px 0 2px rgba(0,0,0,0.25), -1px 0 2px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.25), 0 -1px 2px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
          className={cn(
            GRID_ITEM_CLASSNAME,
            "h-[210px] col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col justify-center items-center gap-3 sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 lg:h-[320px] overflow-hidden bg-white"
          )}
        >
          <motion.h3
            className="font-bold text-2xl text-center lg:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Grab your <br />
            favourite
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TemplateN className="lg:hidden" width={158} height={61} />
            <TemplateN className="hidden lg:block" width={316} height={122} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="py-4 px-6 cursor-pointer lg:text-xl lg:py-6 lg:px-12 lg:rounded-xl">
              Get Started!
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
