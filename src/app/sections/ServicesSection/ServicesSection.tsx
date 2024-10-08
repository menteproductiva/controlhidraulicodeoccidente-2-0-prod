import { Brain, Hammer, ShopCart } from "@/components/Icons/Icons";
import Image from "next/image";
import React from "react";


const services = [
    { title: 'Venta de Equipos', description: 'Amplia gama de equipos hidráulicos de alta calidad para todas sus necesidades.',icon: <Hammer/> },
    { title: 'Mantenimiento', description: 'Servicios de mantenimiento preventivo y correctivo para optimizar el rendimiento de sus equipos.', icon: <ShopCart/> },
    { title: 'Reparación', description: 'Reparaciones expertas que extienden la vida útil de su maquinaria hidráulica.' ,icon: <Brain/>},
    { title: 'Diseño e Ingeniería', description: 'Soluciones personalizadas de ingeniería hidráulica para proyectos específicos.' ,icon: <Brain/>},
  ]


const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-gray-100 py-16 md:py-24">
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-light font-montserrat text-[#2D3688] text-3xl text-center md:text-4xl">
          Nuestros Servicios
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition duration-300"
            >
              <li className="flex justify-center items-center bg-[#E5202D] mb-4 rounded-full w-16 h-16">
               {service.icon}
              </li>
              <h3 className="mb-4 font-light font-montserrat text-[#2D3688] text-xl">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
