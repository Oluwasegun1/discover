import React from "react";

import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Product from "@/components/layout/Product";
import HowItWorks from "@/components/layout/HowitWorks";

// const imageSources = [firstImg, firstImg, firstImg, firstImg];

const DiscoverPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <HowItWorks />
    </div>
  );
};

export default DiscoverPage;
