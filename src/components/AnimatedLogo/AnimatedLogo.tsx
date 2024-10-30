import * as motion from "framer-motion/client";

const AnimatedLogo = ({ className = "" }) => {
  return (
    <svg
      id="ControlHidraulicoLogo"
      className={className}
      viewBox="0 0 51.5 38.0"
      fill="none"
      stroke="#2c318f"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Esfera */}
      <motion.path
        initial={{
          scale: 0,
          rotate: -360,
        }}
        whileInView={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 3,
          delay: 0.5,
          type: "spring",
          stiffness: 30,
          damping: 9,
        }}
        viewport={{ once: true, amount: 0.9 }}
        id="red-sphere"
        fill="#FF1626"
        stroke="#FF1626"
        stroke-width="1"
        d="M21,7.1 a 1.03,1 0 0,0 0,24.4 a 1,1 0 0,0 0,-24.4 m 0.9,1.9 l 4,6.25 l -8.1,0 z"
      />
      {/* Felcha */}
      <motion.path
        initial={{ pathLength: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        id="Arrow"
        stroke-width="1.6"
        d="M10,30.4 L35.8,7.1 L34.6,5.8 L39.6,3.9 L37.0,8.5 L35.8,7.1 L37.8,5.1"
      />
      {/* Letra C */}
      <motion.path
        initial={{ pathLength: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        id="letra-C"
        stroke-width="3.6"
        d="M28.7,2.9 h-12 a 1,1.25 0 0,0 0,32 h12 h-12 a 1,1.1 0 0,1 0,-32"
      />
      {/* Texto H-O */}
      <motion.path
        initial={{ pathLength: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        id="letra-H"
        stroke-width="1.3"
        d="M33.4,26.8 V 36.8 M39.5,26.8 V 36.8 M32.8,31.6 H 40.1 M46.2,27.2 a 1,1.25 0 0,0 0,9.2 a 1,1.25 0 0,0 0,-9.2"
      />
    </svg>
  );
};

export default AnimatedLogo;
