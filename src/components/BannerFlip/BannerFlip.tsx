import { motion } from "framer-motion";




interface BoxProps {
  front: string;
  bottom: string;
  back: string;
  top: string;
}

const Box = ({ front, bottom, back, top }: BoxProps) => {
  return (
    <motion.span
      className="relative w-80 h-20 font-black uppercase"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex justify-center items-center border-2 border-indigo-400 bg-[#2D3688] w-full h-full text-white">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex justify-center items-center border-2 border-indigo-400 bg-[#2D3688] w-full h-full text-white origin-top"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex justify-center items-center border-2 border-indigo-400 bg-[#2D3688] w-full h-full text-white origin-bottom"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex justify-center items-center border-2 border-indigo-400 bg-[#2D3688] w-full h-full text-white origin-center"
      >
        {back}
      </span>
    </motion.span>
  );
};

// export default SpinningBoxText;
export default Box;