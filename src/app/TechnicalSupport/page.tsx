import React from "react";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import TechnicalSheetSection from "../sections/TechnicalSheetSection/TechnicalSheetSection";
import FaqSection from "../sections/FaqSection/FaqSection";
import ContactSection from "../sections/ContactSection/ContactSection";

const Page = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <TechnicalSheetSection />
      <FaqSection />
      <ContactSection/>
    </>
  );
};

export default Page;
