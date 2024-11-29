"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ButtonNeubrutalism from "../ButtonNeubratalism/ButtonNeubrutalism";

const images2 = [
  "/assets/heroSlider/imgHero_1.webp",
  "/assets/heroSlider/imgHero_2.webp",
  "/assets/heroSlider/imgHero_3.webp",
  "/assets/heroSlider/imgHero_4.webp",
];

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: any[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images2.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && (
        <>
          <AnimatePresence>
            <motion.img
              loading="lazy"
              alt="hero-slider"
              fetchPriority="high"
              key={currentIndex}
              src={images2[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="absolute inset-0 w-full h-full image object-center object-cover"
            />
          </AnimatePresence>

          {/* Text Overlay */}
          {overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-black/60 z-40",
                overlayClassName
              )}
            />
          )}
          <div className="z-50 absolute px-4 text-center">
            <p className="drop-shadow-md mb-2 font-bold text-3xl text-neutral-50 md:text-5xl">
              SOLUCIONES HIDRÁULICAS DE ALTO RENDIMIENTO
              <br />
              PARA IMPULSAR TUS PROYECTOS INDUSTRIALES
            </p>
            <ButtonNeubrutalism
              url="/Contact"
              textColor="white"
              colorHover="white"
            >
              Conócenos
            </ButtonNeubrutalism>
          </div>
        </>
      )}
    </div>
  );
};
