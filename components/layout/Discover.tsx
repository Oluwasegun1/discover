"use client";

import Image from "next/image";
import imagebg from "@/assets/bg-frame2.svg";
import img1 from "@/assets/circle-big.svg";
import img2 from "@/assets/circle-mid.png";
import img3 from "@/assets/circle-sm.svg";
import buttn from "@/assets/primary.svg";
import { motion } from "framer-motion";

export default function DiscoverPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${imagebg.src})` }}
      >
        <h1 className="absolute top-10 left-40 p-10 text-3xl font-bold">
          Discova You
        </h1>

        {/* Bottom Left Content (Aligned with Profile Image) */}
        <div className="absolute left-40 bottom-10 max-w-md flex flex-col items-start space-y-4">
          <Image
            src={buttn}
            alt="button"
            className="transition-transform duration-300 shadow-md hover:shadow-lg hover:scale-105 overflow-hidden"
          />

          <p className="text-lg">
            Treat yourself to exclusive perks like curated trips. With Discova
            Personal, every journey feels like first-class.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative flex items-center justify-center">
          {/* Main Large Image (Centered) */}
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
            <Image
              src={img1}
              alt="Woman with sunglasses"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Smaller Images Positioned to the Right */}
        <div className="absolute top-1/2 right-40 -translate-y-1/2 w-[217px] h-[217px] rounded-full  overflow-hidden border-4 shadow-lg ">
          <Image src={img2} alt="Lifestyle" fill className="object-cover " />
        </div>

        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[187.52px] h-[157.76px] rounded-full overflow-hidden border-4 shadow-lg gap-6">
          <Image
            src={img3}
            alt="Travel"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
