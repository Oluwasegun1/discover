"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";

import bgImage from "@/assets/hero-bg.svg";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import four from "@/assets/4.jpg";
import five from "@/assets/5.jpg";

const getSatoshi = localFont({ src: "../fonts/Satoshi-Regular.woff" });
const getSatoshiBold = localFont({ src: "../fonts/Satoshi-Bold.woff" });

const images = [one, two, three, four, five];

export default function Hero() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      await controls.start({
        x: "-50%",
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative flex flex-col items-center justify-center text-white text-center pt-[100px] z-10">
        <h1
          className={`text-5xl font-medium max-w-[550px] ${getSatoshi.className}`}
        >
          Explore the world,{" "}
          <span className={getSatoshiBold.className}>one subscription</span> at
          a time
        </h1>
      </div>
      <svg className="absolute -z-10 w-0 h-0">
        <defs>
          <mask id="containerMask">
            <path
              d="M0 50 Q500 0, 1000 50 L1000 450 Q500 500, 0 450 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>
      <div
        ref={containerRef}
        className="relative w-full h-[500px] overflow-hidden mt-40 pl-40"
        style={{
          mask: "url(#containerMask)",
          WebkitMask: "url(#containerMask)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      >
        <motion.div className="flex absolute w-full inset-0" animate={controls}>
          {[...images, ...images].map((src, index) => (
            <div key={index} className="relative shrink-0 w-[300px] h-full p-2">
              <Image
                src={src}
                alt={`Travel image ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg p-4"
                sizes="500px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
