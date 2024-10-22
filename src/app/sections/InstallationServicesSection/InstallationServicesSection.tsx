import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLike } from "react-icons/ai";
import { TbEyeSearch, TbTestPipeOff } from "react-icons/tb";
import { BiTestTube, BiAnalyse } from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";
import { SiMoleculer } from "react-icons/si";
import { LuFileSearch2 } from "react-icons/lu";
import TiltCard from "@/components/TiltCard/TiltCard";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  {
    title: "Inspección Visual",
    icon: TbEyeSearch,
  },
  {
    title: "Medición y Presión Cauda ",
    icon: BiTestTube,
  },
  {
    title: "Análisis de Fuga",
    icon: BiAnalyse,
  },
  {
    title: "Revisión de Componentes Claves",
    icon: VscOpenPreview,
  },
  {
    title: "Análisis del Fluido Hidráulico",
    icon: IoAnalyticsOutline,
  },
  {
    title: "Pruebas de Rendimiento Bajo Carga",
    icon: TbTestPipeOff,
  },
  {
    title: "Evaluación de Fugas Internas",
    icon: MdOutlineAssessment,
  },
  {
    title: "Revisión de Tuberías y Conexiones",
    icon: SiMoleculer,
  },
  {
    title: "Informes de Diagnósticos",
    icon: LuFileSearch2,
  },
  {
    title: "Tips de Mantenimiento",
    icon: AiOutlineLike,
  },
];
const InstallationServicesSection = () => {
  return (
    <section className="bg-white py-16 text-black">
      <div className="mx-auto px-4 container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 font-bold font-montserrat text-[#2D3688] text-3xl text-center"
        >
          Diagnósticos de Sistemas Hidráulicos
        </motion.h2>
        <p className="text-center">
          Realizamos análisis para detectar fallos, optimizar rendimiento y
          prevenir averías en tus sistemas hidráulicos, garantizando una
          operación segura y eficiente. Lo que incluye el diagnóstico:
        </p>
        <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
          {data.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-4   text-center ${
                index >= data.length - 2
                  ? "lg:col-span-2 lg:justify-self-center"
                  : ""
              }`}
            >
              <TiltCard title={service.title} Icon={service.icon} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="flex flex-row items-center bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors">
            <FaWhatsapp className="mr-2" />
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallationServicesSection;
