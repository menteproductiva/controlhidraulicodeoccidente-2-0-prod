"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  { year: 1985, event: "Founded as a small hydraulic parts supplier" },
  { year: 1995, event: "Expanded to full-scale hydraulic system design" },
  { year: 2005, event: "Introduced cutting-edge digital hydraulic controls" },
  { year: 2015, event: "Became industry leader in eco-friendly hydraulic solutions" },
  { year: 2023, event: "Celebrating 38 years of innovation and reliability" }
];

const InfiniteScrollList = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(milestones);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMilestones((prevMilestones) => {
        const updatedMilestones = [...prevMilestones];
        const firstItem = updatedMilestones.shift(); // Remueve el primero
        
        // Verificamos que firstItem no sea undefined
        if (firstItem) {
          updatedMilestones.push(firstItem); // Lo añade al final si no es undefined
        }
        
        return updatedMilestones;
      });
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);
  

  const itemVariants = {
    initial: (direction:any) => ({
      y: direction === "down" ? -100 : 100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 350, // Usamos la rigidez solicitada
        damping: 25,    // Amortiguación solicitada
        duration: 0.8,  // Duración más controlada
      },
    },
    exit: (direction:any) => ({
      y: direction === "down" ? 100 : -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 350, // Usamos la rigidez solicitada
        damping: 25,    // Amortiguación solicitada
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="bg-gray-100 px-4 md:px-8 py-16">
      <h2 className="mb-8 font-['Montserrat'] font-light text-[#2D3688] text-3xl text-center md:text-4xl">
        Our Journey
      </h2>
      <div className="space-y-8 mx-auto max-w-4xl overflow-hidden">
        <AnimatePresence initial={false} custom="down">
          {visibleMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="flex items-center space-x-4 shadow-lg"
              custom="down"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={itemVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-right w-24 font-bold text-[#E5202D]">
                {milestone.year}
              </div>
              <div className="bg-[#2D3688] rounded-full w-4 h-4"></div>
              <div className="flex-1 text-black">{milestone.event}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InfiniteScrollList;
