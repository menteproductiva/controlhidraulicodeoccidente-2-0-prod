"use client";
import React from "react";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative bg-white py-12">
      <div className="top-0 left-0 absolute bg-[#1A2056] w-full h-1/4"></div>
      <div className="relative z-10 flex lg:flex-row flex-col justify-between items-center space-y-6 lg:space-y-0 mx-auto container">
        <div className="relative flex justify-center w-full lg:w-1/2">
          <Image
            src="/assets/calltoaction.jpg"
            alt="Plano de Equipamiento Hidráulico"
            width={450}
            height={450}
            className="shadow-lg transform rotate-3"
          />
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg w-full lg:w-1/2">
          <h2 className="mb-4 font-bold text-3xl text-black">
            Conoce nuestras soluciones
          </h2>
          <p className="mb-6 text-gray-700">
            Deja tus datos ahora y recibe una consulta gratuita sobre nuestros
            sistemas de equipamiento hidráulico.
          </p>
          <button
            type="submit"
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full text-white transition duration-300"
          >
            Enviar solicitud
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
