"use client";
import React, { useState } from "react";
import InstallationServicesSection from "../sections/InstallationServicesSection/InstallationServicesSection";
import ProjectsServicesSection from "../sections/ProjectsServicesSection/ProjectsServicesSection";
import EquipmentServicesSection from "../sections/EquipmentServicesSection/EquipmentServicesSection";
import TechnicalConsultingServicesSection from "../sections/TechnicalConsultingServicesSection/TechnicalConsultingServicesSection";
import DiagnosticsServicesSection from "../sections/DiagnosticsServicesSection/DiagnosticsServicesSection";
import CallToActionAboutUs from "../sections/CallToActionAboutUs/CallToActionAboutUs";
import TextParallaxContent from "@/components/TextParallaxContent/TextParallaxContext";
import { FiTool, FiSettings, FiCheckCircle } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import HoverDevCards from "@/components/HoverDevCards/HoverDevCards";

const services = [
  {
    title: "Instalación",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Instalamos sistemas hidráulicos con precisión y eficiencia, garantizando un rendimiento óptimo y seguro para tus proyectos industriales.",
    time: "De 2 días a 2 semanas. Depende del tamaño y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    Icon: FiSettings,
    href: "#",
  },
  {
    title: "Mantenimiento Preventivo",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Realizamos inspecciones periódicas para prevenir fallos, extender la vida útil de tus equipos y garantizar su eficiencia y seguridad.",
    time: "De 4 horas a 2 días. Depende del tamaño y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    Icon: FiTool,
    href: "#",
  },
  {
    title: "Mantenimiento Correctivo",
    titleDescription: "Tiempo de mantenimiento",
    description:
      "Reparamos fallos rápidamente, restaurando tus sistemas hidráulicos y minimizando tiempos de inactividad para asegurar su óptimo rendimiento.",
    time: "De 1 a 5 días. Depende de la gravedad del fallo y la complejidad del sistema.",
    buttonText: "SOLICITAR COTIZACIÓN",
    Icon: FaTools,
    href: "#",
  },
];

const Page = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/assets/imgServices.jpg"
          heading="Soluciones Hidráulicas Integrales para Todas tus Necesidades"
        >
          <section className="bg-gray-100 py-12">
            <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">
              Instalación y Mantenimiento de Sistemas Hidráulicos
            </h2>
            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
              {services.map((service, index) => (
                <HoverDevCards
                  key={index}
                  title={service.title}
                  titleDescription={service.titleDescription}
                  subtitle={service.description}
                  time={service.time}
                  Icon={service.Icon}
                  href={service.href}
                />
              ))}
            </div>
          </section>
        </TextParallaxContent>
      </div>
      <ProjectsServicesSection />
      <InstallationServicesSection />
      <DiagnosticsServicesSection />
      <CallToActionAboutUs />
    </div>
  );
};

export default Page;
