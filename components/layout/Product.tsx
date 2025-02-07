import React from "react";
import bg from "@/assets/product-bg.jpg";
import ourImg from "@/assets/image (1).png";
import buttn from "@/assets/primary.svg";
import Image from "next/image";

const Product = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 "></div>

      {/* Content */}

      {/* <div className="absolute inset-0 flex flex-col justify-center items-start text-white text-center">
        <h1 className="text-5xl text-black font-bold">Our Products</h1>
        <p className="text-xl text-black mt-2">Discover More, Live Fully</p>
      </div> */}

      <div className="flex flex-col items-center justify-center p-20 space-y-10 w-full">
        <div className="text-center">
          <h1 className="text-5xl text-black font-bold">Our Products</h1>
          <p className="text-xl text-black mt-2">Discover More, Live Fully</p>
        </div>
        <div className="w-full">
          <p className="text-5xl text-black font-bold px-20">
            Discova Experiences
          </p>
        </div>
        <div className="flex items-center justify-start w-full space-x-16 pl-12">
          <Image src={ourImg} alt="ourImg" className="h-[489.38px] w-[376px]" />

          <div className="space-y-5">
            <Image src={buttn} alt="button" />
            <h2 className="">
              From dreamy honeymoons to epic concert nights, we plan the
              unforgettable so you can live it.{" "}
            </h2>
            <p className="">
              No stress, just amazing stories waiting to happen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
