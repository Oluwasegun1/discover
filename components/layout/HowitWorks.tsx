// pages/how-it-works.js

import Image from "next/image";
import bg from "@/assets/bg-how-it-works.png";
import first from "@/assets/work-1.jpg";
import second from "@/assets/work-2.jpg";
import third from "@/assets/work-3.jpg";
import fourth from "@/assets/work-4.jpg";

export default function HowItWorks() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-row gap-8 justify-between items-center container mx-auto  w-full rounded-xl">
        {/* Left Section */}
        <div className="flex flex-col justify-center max-w-lg">
          <h1 className="text-4xl  font-bold text-gray-800 mb-4">
            This is how it works
          </h1>
          <p className="text-lg text-gray-600 mb-8 ">
            Booking unforgettable experiences has never been easier—enjoy
            exclusive perks and seamless travel in just a few steps.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {[
            {
              title: "Choose the plan that works best for you",
              description:
                "Select a membership category and plan that fits your travel needs",
              image: first,
            },
            {
              title: "Sign Up & Activate",
              description:
                "Complete registration, make payment, and receive your digital membership card.",
              image: second,
            },
            {
              title: "Access Exclusive Benefits",
              description:
                "Explore curated experiences, book activities, and explore exclusive partner perks from your dashboard.",
              image: third,
            },
            {
              title: "Enjoy Unforgettable Adventures",
              description:
                "Travel with ease and create lasting memories with DiscovaTrips!",
              image: fourth,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-lg rounded-2xl overflow-hidden pr-4"
              style={{
                width: "593px",
                height: "167px",
                // gap: "28px",

                opacity: "1",
              }}
            >
              <div
                className="relative flex-shrink-0"
                style={{
                  width: "280px",
                  height: "167px",

                  opacity: "1",
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-2xl"
                />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
