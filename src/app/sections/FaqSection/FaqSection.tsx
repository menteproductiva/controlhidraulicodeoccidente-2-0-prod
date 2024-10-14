"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownArrow, UpArrow } from "@/components/Icons/Icons";

const faqs = [
  {
    id: 1,
    question: "¿Con qué frecuencia debo dar servicio a mi bomba hidráulica?",
    answer:
      "Recomendamos dar servicio a su bomba hidráulica cada 2000 horas de operación o anualmente, lo que ocurra primero.",
  },
  {
    id: 2,
    question: "¿Qué tipo de fluido hidráulico debo usar?",
    answer:
      "El tipo de fluido hidráulico depende de su equipo específico. En general, recomendamos usar aceite hidráulico ISO VG 46 para la mayoría de las aplicaciones.",
  },
  {
    id: 3,
    question:
      "¿Cómo puedo solucionar problemas de baja presión en mi sistema hidráulico?",
    answer:
      "La baja presión puede ser causada por varios factores, incluyendo fugas, bombas desgastadas o ajustes incorrectos de las válvulas. Comience verificando si hay fugas visibles, luego verifique la salida de la bomba y la configuración de la válvula de alivio.",
  },
];

const FaqSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <section className="mx-auto px-4 container">
        <h2 className="mb-6 font-light font-montserrat text-[#2D3688] text-3xl">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={false}
            >
              <button
                className="flex justify-between items-center px-6 py-4 w-full text-left"
                onClick={() =>
                  setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                }
              >
                <span className="font-semibold text-[#2D3688]">
                  {faq.question}
                </span>
                {expandedFaq === faq.id ? (
                  <UpArrow className="w-6 h-6 text-[#E5202D] transition duration-300 ease-in-out" />
                ) : (
                  <DownArrow className="w-6 h-6 text-[#E5202D] transition duration-300 ease-in-out" />
                )}
              </button>
              <AnimatePresence>
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 overflow-hidden"
                  >
                    <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
