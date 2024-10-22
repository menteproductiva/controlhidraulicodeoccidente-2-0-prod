"use client"
import React from "react";
import TechnicalSheetSection from "../sections/TechnicalSheetSection/TechnicalSheetSection";
import FaqSection from "../sections/FaqSection/FaqSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";

const Page = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="bg-[#2D3688]">
        <TextParallaxContent
          imgUrl="/assets/imgServices.jpg"
          heading="Revisa nuestros manuales técnicos"
        >
        <TechnicalSheetSection />
        </TextParallaxContent>
      </div>
      <FaqSection />
      <ContactSection/>
    </>
  );
};

export default Page;
