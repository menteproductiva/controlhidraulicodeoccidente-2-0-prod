import React from 'react'
import { motion } from "framer-motion";


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

const CallToActionAboutUs = () => {
  return (
    <section className="bg-[#2D3688] px-4 md:px-8 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="mb-4 font-['Montserrat'] font-light text-3xl md:text-4xl"
            {...fadeInUp}
          >
            Discover More About Our Hydraulic Solutions
          </motion.h2>
          <motion.p
            className="mb-8 text-lg"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Learn how our sister company, Empaques Chavoya, complements our hydraulic expertise with specialized sealing solutions.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="bg-[#E5202D] hover:bg-[#c51b27] px-8 py-3 text-lg text-white"
              onClick={() => window.open('https://www.chavoya.com', '_blank')}
            >
              Visit Empaques Chavoya
            </button>
          </motion.div>
        </div>
      </section>
  )
}

export default CallToActionAboutUs