import React from "react";
import profile from "@/assets/DISCOVA TRIPSAsset 5(1) 1.svg";
import Image from "next/image";
import icon from "@/assets/align-center.svg";

const Header = () => {
  return (
    <>
      <header className="card fixed top-0 left-0 right-0 flex justify-between items-center px-40 bg-transparent h-[80px] z-10">
        <Image src={profile} alt="Discova Trips" width={150} height={40} />

        <div className="flex gap-x-4">
          <button className="relative px-4 py-1 text-blue-900 font-medium  rounded-full border-2 bg-gradient-to-r from-[#96B6E7] to-[#ECFBFD] border-purple-500 shadow-lg ">
            Get Started
          </button>
          <Image src={icon} alt="icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
