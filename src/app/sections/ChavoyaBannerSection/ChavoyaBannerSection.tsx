"use client";
import Box from "@/components/BannerFlip/BannerFlip";
import GradientShadowButton from "@/components/ButtonGradientShadow/ButtonGradientShadow";
import Image from "next/image";
import React from "react";

const ChavoyaBannerSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center bg-[url('/assets/bg_empaquesHidraulicos_ok.jpg')] bg-blend-screen bg-cover bg-no-repeat bg-center px-4 lg:py-4 h-[40rem] md:h-[28rem] lg:h-[32rem]">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h2 className="font-bold text-4xl text-white md:text-6xl">DESCUBRE</h2>
        <div className="flex justify-center items-center w-full">
          <Image
            loading="lazy"
            className="mt-4 md:mt-6"
            alt="Chavoya"
            width={300} // Cambiado para pantallas pequeñas
            height={150} // Cambiado para pantallas pequeñas
            src="/assets/logos/logo_Chavoya_4.png"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0 w-full md:w-1/2">
        <div className="text-center md:text-left">
          <span className="block mb-4 md:mb-4 font-semibold text-white text-xl md:text-2xl">
            Nuestra aliada en soluciones especializadas que
          </span>
          <span className="flex md:flex-row flex-col items-center gap-2 md:gap-4 font-semibold text-2xl text-white md:text-3xl">
            <Box
              front="complementan"
              bottom="potencian"
              back="benefician"
              top="mejoran"
            />
            tus proyectos
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 md:mt-10">
          <GradientShadowButton>IR A SITIOWEB</GradientShadowButton>
        </div>
      </div>
    </div>
  );
};

export default ChavoyaBannerSection;
