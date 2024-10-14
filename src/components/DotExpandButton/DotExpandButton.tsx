"use client"
import { motion } from 'framer-motion';
import React from 'react';

const DotExpandButton: React.FC = () => {
  return (
    <button className="relative bg-blue-500 px-6 py-3 rounded-full font-semibold text-white focus:outline-none overflow-hidden">
      <span>Hover Me</span>
      <motion.span
        className="top-0 left-0 absolute flex justify-center items-center space-x-1 w-full h-full"
        initial="hidden"
        whileHover="visible"
      >
        {Array(3)
          .fill('')
          .map((_, i) => (
            <motion.span
              key={i}
              className="block bg-white rounded-full w-2 h-2"
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: {
                    delay: i * 0.1, // Delay each dot
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  },
                },
              }}
            />
          ))}
      </motion.span>
    </button>
  );
};

export default DotExpandButton;
