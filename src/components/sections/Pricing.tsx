"use client";

import { Button } from "../ui/button";
import { CircleCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: 0,
    description:
      "Perfect for individuals just getting started with productivity tracking.",
    features: [
      "Track up to 5 projects",
      "Basic task management",
      "Access to community support",
      "Sync across devices",
    ],
    buttonText: "Get Started",
    bg: "bg-white text-black",
    buttonBg: "bg-black text-white",
    isPopular: false,
  },
  {
    name: "Premium",
    price: 19,
    description:
      "Great for professionals who need deeper insights and flexibility.",
    features: [
      "Unlimited projects and tasks",
      "Advanced analytics and reports",
      "Priority email support",
      "Customizable dashboards",
    ],
    buttonText: "Get Started",
    bg: "bg-black text-white",
    buttonBg: "bg-white text-black hover:bg-white/90",
    isPopular: true,
  },
  {
    name: "Pro",
    price: 33,
    description:
      "Designed for teams and businesses that require powerful collaboration.",
    features: [
      "Team collaboration",
      "Task automation",
      "Dedicated support",
      "Integrations with third-party apps",
    ],
    buttonText: "Get Started",
    bg: "bg-white text-black",
    buttonBg: "bg-black text-white",
    isPopular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.3,
    },
  }),
};

const Pricing = () => {
  return (
    <div className="snap-section min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <motion.h1
        className="text-3xl text-center sm:text-5xl font-semibold tracking-tighter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Simple Pricing Plans
      </motion.h1>
      <motion.div
        className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: plan.isPopular
                ? "5px 2px 10px rgba(0,0,0,0.25), -5px -2px 10px rgba(0,0,0,0.25), 0 25px 50px rgba(0,0,0,0.4)"
                : "5px 2px 10px rgba(0,0,0,0.25), -5px -2px 10px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
            className={twMerge(
              `${plan.bg} border border-gray-200 rounded-2xl p-6 shadow-[5px_2px_10px_rgba(0,0,0,0.25),-5px_-2px_10px_rgba(0,0,0,0.25)]`,
              plan.isPopular && "lg:-translate-y-4 lg:scale-105 border-gray-600"
            )}
            style={{ color: plan.isPopular ? "white" : "black" }}
          >
            {plan.isPopular && (
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                Most Popular
              </motion.div>
            )}
            <motion.h3
              className="text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {plan.name}
            </motion.h3>
            <motion.p
              className="mt-2 text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
            >
              ${plan.price}
              <span className="text-lg font-normal opacity-70">/month</span>
            </motion.p>
            <motion.p
              className={twMerge(
                "mt-4 font-medium",
                plan.isPopular ? "text-white" : "text-muted-foreground"
              )}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {plan.description}
            </motion.p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-2"
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <CircleCheck className="h-4 w-4 mt-1 text-green-500" />
                  </motion.div>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className={`w-full mt-6 ${plan.buttonBg}`}>
                {plan.buttonText}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
