import React from "react";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { AiOutlineSignature } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const DiagnosticsServicesSection = () => {
  const diagnosticSteps = [
    {
      icon: "🔍",
      title: "Inspection",
      description: "Thorough visual and physical inspection of the system",
    },
    {
      icon: "📊",
      title: "Analysis",
      description: "In-depth analysis of system performance and efficiency",
    },
    {
      icon: "🛠️",
      title: "Testing",
      description:
        "Comprehensive testing of individual components and overall system",
    },
    {
      icon: "📝",
      title: "Reporting",
      description: "Detailed report with findings and recommendations",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 text-black">
      <div className="flex flex-col justify-center items-center mx-auto px-4 container">
        <div className="flex flex-col bg-[#2D3688] mb-3 pt-3 pb-1 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-3xl text-center text-white"
          >
            Otros Servicios
          </motion.h2>
        </div>

        <div className="gap-8 grid md:grid-cols-2 mt-3">
          <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
            {/* Icon */}
            <div className="mb-4 text-4xl text-red-500">
              <FiSettings />
            </div>
            {/* Title */}
            <h3 className="mb-2 font-semibold text-blue-900 text-xl">
              Consultoría Técnica
            </h3>
            {/* Description */}
            <p className="mb-6 text-gray-600">
              Asesoramos en la optimización de sistemas hidráulicos, brindando
              soluciones personalizadas para maximizar su rendimiento y
              durabilidad.
            </p>
            {/* Button */}
            <div className="flex flex-col justify-center items-center">
              <button className="flex flex-row items-center bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors">
                <FaWhatsapp className="mr-2" />
                Solicitar Cotización
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
            {/* Icon */}
            <div className="mb-4 text-4xl text-red-500">
              <AiOutlineSignature />
            </div>
            {/* Title */}
            <h3 className="mb-2 font-semibold text-blue-900 text-xl">
              Consultoría Técnica
            </h3>
            {/* Description */}
            <p className="mb-6 text-gray-600">
              Asesoramos en la optimización de sistemas hidráulicos, brindando
              soluciones personalizadas para maximizar su rendimiento y
              durabilidad.
            </p>
            {/* Button */}
            <div className="flex flex-col justify-center items-center">
              <button className="flex flex-row items-center bg-green-500 hover:bg-green-600 mt-4 px-4 py-2 rounded-lg font-bold text-white transition-colors">
                <FaWhatsapp className="mr-2" />
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsServicesSection;
