"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "../ui/button";
import { CircleCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import { twMerge } from "tailwind-merge";

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
    isPopular: true, // highlight Premium as the best option
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

const Pricing01 = () => {
  return (
    <div className="snap-section min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-3xl text-center sm:text-5xl  font-semibold tracking-tighter">
        Simple Pricing Plans
      </h1>
      <div className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.bg}border rounded-2xl p-6 shadow-[5px_2px_10px_rgba(0,0,0,0.25),-5px_-2px_10px_rgba(0,0,0,0.25)]`}
            style={{ color: plan.isPopular ? "white" : "black" }}
          >
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
            <p
              className={twMerge(
                "mt-4 font-medium",
                plan.isPopular ? "text-white" : "text-muted-foreground"
              )}
            >
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="lg" className={`w-full mt-6 ${plan.buttonBg}`}>
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing01;
