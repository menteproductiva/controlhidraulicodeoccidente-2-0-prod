import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={"card-hover-effect-item-" + idx}
          href={`https://wa.me/523318937866?text=${encodeURIComponent(
            `Hola, estoy interesado en ${item.title}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative p-2 w-full h-full group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="block absolute inset-0 bg-[#9EA3C8] rounded-3xl w-full h-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="flex justify-between items-center">
              <div className="flex items-center">
                {item.title}
                <span className="inline-block ml-2 w-5 h-5">{item.icon}</span>
              </div>
              <span className="inline-block flex justify-center items-center bg-green-500 rounded-full w-8 h-8">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </span>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#2D3688] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1
      className={cn(
        "text-zinc-100 text-xl font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
