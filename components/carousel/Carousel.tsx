"use client";
import React, { useState } from "react";
import CarouselNav from "./CarouselNav";
import useNavigate from "@/hooks/useNavigate";
import { SectionImages } from "@/constants/images";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Carousel = () => {
  const { navigate } = useNavigate();
  const [currentImage, setCurrentImage] = useState(SectionImages[0]);
  const [prevImage, setPrevImage] = useState(
    SectionImages[SectionImages.length - 1]
  );
  const [nextImage, setNextImage] = useState(SectionImages[1]);
  const [direction, setDirection] = useState("right");

  const moveLeft = () => {
    setDirection("left");
    const currentIndex = SectionImages.indexOf(currentImage);
    const newIndex =
      (currentIndex - 1 + SectionImages.length) % SectionImages.length;

    setCurrentImage(SectionImages[newIndex]);

    setPrevImage(
      SectionImages[
        (newIndex - 1 + SectionImages.length) % SectionImages.length
      ]
    );
    setNextImage(SectionImages[(newIndex + 1) % SectionImages.length]);
  };
  const moveRight = () => {
    setDirection("right");
    const currentIndex = SectionImages.indexOf(currentImage);
    const newIndex = (currentIndex + 1) % SectionImages.length;

    setCurrentImage(SectionImages[newIndex]);

    setPrevImage(
      SectionImages[
        (newIndex - 1 + SectionImages.length) % SectionImages.length
      ]
    );
    setNextImage(SectionImages[(newIndex + 1) % SectionImages.length]);
  };

  return (
    <section className="container h-full flex flex-col items-center pt-[3rem]">
      <h1 className="text-2xl mb-[2rem]">Sections</h1>
      <AnimatePresence>
        <motion.article className="container flex items-center justify-center w-full h-[50%]">
          <motion.div
            key={prevImage.alt}
            initial={{
              opacity: 0,
              x: direction === "left" ? "-100%" : "100%",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction === "left" ? "100%" : "-100%",
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-[25%]"
          >
            <Image
              src={prevImage.image}
              alt={prevImage.alt}
              className="w-[100px] h-[100px] snap-x"
            />
            <motion.p className="text-tiny">{prevImage.alt}</motion.p>
          </motion.div>
          <motion.div
            key={direction}
            initial={{
              opacity: 0,
              x: direction === "left" ? "-100%" : "100%",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction === "left" ? "100%" : "-100%",
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-[50%]"
          >
            <Image
              src={currentImage.image}
              alt={currentImage.alt}
              className="w-[200px] h-[200px] snap-x"
            />
            <motion.p className="text-md">{currentImage.alt}</motion.p>
          </motion.div>
          <motion.div
            key={nextImage.alt}
            initial={{
              opacity: 0,
              x: direction === "left" ? "-100%" : "100%",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction === "left" ? "100%" : "-100%",
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center w-[25%]"
          >
            <Image
              src={nextImage.image}
              alt={nextImage.alt}
              className="w-[100px] h-[100px] snap-x"
            />
            <motion.p className="text-tiny">{nextImage.alt}</motion.p>
          </motion.div>
        </motion.article>
      </AnimatePresence>
      <CarouselNav
        left={moveLeft}
        right={moveRight}
        onClick={() => navigate(`${currentImage.href}`)}
      />
      <div>
        <p>Text</p>
      </div>
    </section>
  );
};

export default Carousel;
