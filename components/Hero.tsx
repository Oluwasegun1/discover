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
        <h1 className={`text-6xl font-medium  ${getSatoshi.className}`}>
          Explore the world,{" "}
          <p>
            <span className={getSatoshiBold.className}>one subscription</span>{" "}
            at a time
          </p>
        </h1>
      </div>

      <svg className="absolute -z-10 w-0 h-0">
        <defs>
          <mask id="containerMask">
            <path
              d="M0 100 
                 Q 720 200, 1440 100 
                 L 1440 500 
                 Q 720 400, 0 500 
                 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>
      <div className="relative w-full flex justify-center items-center px-4">
        <div
          ref={containerRef}
          className="relative w-screen h-[600px] overflow-hidden mt-8"
          style={{
            mask: "url(#containerMask)",
            WebkitMask: "url(#containerMask)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        >
          <motion.div
            className="flex absolute left-0"
            animate={controls}
            style={{ gap: "24px", width: "5760px" }}
          >
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[360px] h-[500px]"
                style={{ margin: "0 12px" }}
              >
                <Image
                  src={src}
                  alt={`Travel image ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="360px"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
