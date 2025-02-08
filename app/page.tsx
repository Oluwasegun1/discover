import React from "react";

import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
// import Product from "@/components/layout/Product";
import HowItWorks from "@/components/layout/HowitWorks";
import ScrollableSections from "@/components/layout/ScrollableSection";
// import DiscoverYou from "@/components/layout/Discover";
// import DiscovaFamily from "@/components/layout/DiscoverFamily";

const DiscoverPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollableSections />

      <HowItWorks />
    </div>
  );
};

export default DiscoverPage;
