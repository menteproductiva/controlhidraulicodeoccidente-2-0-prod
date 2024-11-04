import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiAtlassian,
  SiDribbble,
  SiNike,
} from "react-icons/si";
import Image from "next/image";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="items-center gap-8 lg:gap-4 grid grid-cols-1 lg:grid-cols-2 bg-gray-100 px-5 lg:px-20 py-36 lg:py-24 overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-[#2D3688] text-5xl">Lo que opinan nuestros clientes</h3>
        <p className="my-4 text-black">
        En Control Hidráulico de Occidente S.A. de C.V., nos enorgullece ofrecer un servicio excepcional y soluciones innovadoras a nuestros clientes. Hemos trabajado con empresas líderes en la industria para optimizar sus operaciones y brindar estrategias personalizadas que impulsan el crecimiento y el éxito.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <div
            key={n}
            onClick={() => setSelected(n)}
            className="relative bg-slate-300 w-full h-1.5"
          >
            {selected === n ? (
              <motion.span
                className="top-0 bottom-0 left-0 absolute bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="top-0 bottom-0 left-0 absolute bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="relative shadow-xl p-4 h-[450px] lg:h-[500px]">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  Icon,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
  url,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "#2D3688" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="top-0 left-0 absolute flex flex-col justify-between p-8 lg:p-12 w-full min-h-full cursor-pointer"
    >
      {/* <Icon className="mx-auto text-7xl" /> */}
      <div>
        <Image className="mx-auto text-7xl" src={`${url}`} alt="logo" width={150} height={150}/>

      </div>

      <p className="my-8 font-light text-lg lg:text-xl italic">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  Icon?: IconType;
  title?: string;
  name: string;
  description: string;
  url?: string;
}

const testimonials = [
  {
    Icon: SiNike,
    description:
      "La solución hidráulica personalizada que diseñamos no solo resolvió los problemas de la planta, sino que también generó beneficios a largo plazo, permitiendo un mejor control de los costos y un aumento en la productividad. Este proyecto es un claro ejemplo de cómo nuestras soluciones hidráulicas optimizan el rendimiento y mejoran la eficiencia de las operaciones industriales.",
    name: "Planta de producción de maquinaria pesada en el sector de manufactura.",
    url: "/assets/logos/logoDistribuidor_1.png"
  },
  {
    Icon: SiAtlassian,
    description:
      "La renovación del sistema hidráulico no solo permitió a la planta hidroeléctrica aumentar su capacidad de generación de energía, sino que también mejoró la seguridad y redujo significativamente los costos operativos. Este proyecto es un claro ejemplo de cómo nuestras soluciones hidráulicas personalizadas pueden transformar operaciones críticas en el sector energético, asegurando un rendimiento óptimo y sostenible.",
    name: "Planta hidroeléctrica en el sector energético.",
    url: "/assets/logos/logoDistribuidor_6.png"
  },
  {
    Icon: SiDribbble,
    description:
      "Gracias a nuestra solución hidráulica automatizada, la planta de producción de alimentos logró optimizar sus operaciones, aumentar su capacidad de producción y mejorar la sostenibilidad de sus procesos. Este proyecto es un claro ejemplo de cómo la automatización hidráulica puede transformar la eficiencia operativa y la competitividad en industrias como la alimentaria.",
    name: "Empresa multinacional del sector de alimentos.",
    url: "/assets/logos/logoDistribuidor_3.png"
  },
 
];