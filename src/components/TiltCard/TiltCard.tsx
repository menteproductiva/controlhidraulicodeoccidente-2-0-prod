import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
  import { useRef } from "react";
  import { IconType } from 'react-icons';

  interface TiltCardProps {
    title: string;
    description?: string;
    Icon?: IconType;
  }
  
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
  
  const TiltCard = ({ title, description, Icon }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current) return [0, 0];
  
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;
  
      x.set(rX);
      y.set(rY);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative bg-[#2D3688] rounded-xl w-60 h-72"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 place-content-center grid bg-white shadow-lg rounded-xl"
        >
          {Icon && (
            <Icon
              style={{
                transform: "translateZ(75px)",
              }}
              className="mx-auto text-[#E5202D] text-4xl"
            />
          )}
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="font-bold text-[#2D3688] text-2xl text-center"
          >
            {title}
          </p>
          {description && (
            <p
              style={{
                transform: "translateZ(25px)",
              }}
              className="mt-2 text-center text-gray-500 text-sm"
            >
              {description}
            </p>
          )}
        </div>
      </motion.div>
    );
  };
  
  export default TiltCard;
  