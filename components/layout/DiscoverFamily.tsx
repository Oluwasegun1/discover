"use client";
import Image from "next/image";
import React from "react";
import bg from "@/assets/bg-frame3.svg";
import foreground from "@/assets/frame3top.svg";
import middle from "@/assets/frame3mid.svg";
import background from "@/assets/frame3low.svg";
import buttn from "@/assets/primary.svg";
import { motion } from "framer-motion";

const DiscovaFamily = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Your content */}

      <div
        className="relative w-full min-h-screen px-4"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="max-w-6xl mx-auto pt-20 ml-[140px]">
          <h1 className="text-4xl font-semibold text-gray-900 mb-16">
            Discova Family
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative w-full max-w-xl aspect-[4/3]">
              {/* Stack of images with subtle rotations */}
              <div
                className="absolute w-full h-full transform rotate-[-6deg] transition-transform duration-300 hover:rotate-[-8deg]"
                // style={{ top: "8%", left: "8%" }}
              >
                <div className="w-[692] h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={background}
                    alt="Family enjoying vacation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div
                className="absolute w-full h-full transform rotate-[-2deg] transition-transform duration-300 hover:rotate-[-4deg]"
                // style={{ top: "4%", left: "4%" }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={middle}
                    alt="Family activities"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="relative w-full h-full transform transition-transform duration-300 hover:rotate-2">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={foreground}
                    alt="Family moments"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="max-w-md space-y-6 px-4">
              <Image
                src={buttn}
                alt="button"
                className="transition-transform duration-300 shadow-md hover:shadow-lg hover:scale-105"
              />

              <p className="text-lg text-gray-700 leading-relaxed">
                Perfect getaways made just for families! From relaxing escapes
                to fun-packed activities, we make sure everyone—from toddlers to
                grandparents—has a great time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscovaFamily;
