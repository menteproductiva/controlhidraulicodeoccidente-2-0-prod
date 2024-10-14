"use client"
import ScrollingLogos from "@/components/ScrollingLogos/ScrollingLogos";
import React from "react";

const DistributeBrandsHomeSection = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="mx-auto container">
        <h2 className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
          Marcas que distribuimos
        </h2>
        <ScrollingLogos/>
      </div>
    </section>
  );
};

export default DistributeBrandsHomeSection;
