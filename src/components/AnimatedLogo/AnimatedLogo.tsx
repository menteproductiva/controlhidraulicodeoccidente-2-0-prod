import * as motion from "framer-motion/client";

const isSafari =
  typeof window !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const initialPath = { pathLength: isSafari ? 1 : 0 };

const AnimatedLogo = ({ className = "" }) => {
  return (
    <motion.svg
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
        initial={
          isSafari
            ? {
                scale: 1,
                rotate: 0,
              }
            : {
                scale: 0,
                rotate: -360,
              }
        }
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
        fill="#FF1626"
        className="border-2"
        stroke="#FF1626"
        strokeWidth="1"
        d="M21,7.1 a 1.03,1 0 0,0 0,24.4 a 1,1 0 0,0 0,-24.4 m 0.9,1.9 l 4,6.25 l -8.1,0 z"
      />

      {/* Flecha */}
      <motion.path
        initial={initialPath}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        id="Arrow"
        strokeWidth="1.6"
        d="M10,30.4 L35.8,7.1 L34.6,5.8 L39.6,3.9 L37.0,8.5 L35.8,7.1 L37.8,5.1"
      />
      {/* Letra C */}
      <motion.path
        initial={initialPath}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5, margin: "20% 20% 20% 20%" }}
        id="letra-C"
        strokeWidth="3.6"
        d="M28.7,2.9 h-12 a 1,1.25 0 0,0 0,32 h12 h-12 a 1,1.1 0 0,1 0,-32"
      />
      {/* Texto H-O */}
      <motion.path
        initial={initialPath}
        transition={{ duration: 2, delay: 0.5 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        id="letra-H"
        strokeWidth="1.3"
        d="M33.4,26.8 V 36.8 M39.5,26.8 V 36.8 M32.8,31.6 H 40.1 M46.2,27.2 a 1,1.25 0 0,0 0,9.2 a 1,1.25 0 0,0 0,-9.2"
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
