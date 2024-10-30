import { motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { LeftArrow, RightArrow } from "../Icons/Icons";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = ({items} :any) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="flex bg-white w-full" ref={ref}>
      <div className="relative p-1 overflow-hidden">
        {/* CARDS */}
        <div className="mx-auto w-full">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item:any) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="top-[60%] left-0 z-30 absolute backdrop-blur-sm p-3 pl-2 hover:pl-3 rounded-r-xl text-4xl text-white transition-[padding]"
            onClick={shiftLeft}
          >
            <LeftArrow className="w-10"/>
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="top-[60%] right-0 z-30 absolute backdrop-blur-sm p-3 pr-2 hover:pr-3 rounded-l-xl text-4xl text-white transition-[padding]"
            onClick={shiftRight}
          >
            <RightArrow className="w-10"/>
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }: ItemType) => {
  return (
    <div
      className="relative bg-white shadow-md hover:shadow-xl rounded-2xl transition-all cursor-pointer shrink-0 hover:scale-[1.015]"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="z-20 absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/0 hover:backdrop-blur-sm p-6 rounded-2xl text-white transition-[backdrop-filter]">
        <span className="font-semibold text-violet-300 text-xs uppercase">
          {category}
        </span>
        <p className="my-2 font-bold text-3xl">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>

    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    url: "/imgs/computer/mouse.png",
    category: "Mice",
    title: "Just feels right",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    url: "/imgs/computer/keyboard.png",
    category: "Keyboards",
    title: "Type in style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    url: "/imgs/computer/monitor.png",
    category: "Monitors",
    title: "Looks like a win",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    url: "/imgs/computer/chair.png",
    category: "Chairs",
    title: "Back feels great",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    url: "/imgs/computer/lights.png",
    category: "Lights",
    title: "It's lit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    url: "/imgs/computer/desk.png",
    category: "Desks",
    title: "Stand up straight",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    url: "/imgs/computer/headphones.png",
    category: "Headphones",
    title: "Sounds good",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
