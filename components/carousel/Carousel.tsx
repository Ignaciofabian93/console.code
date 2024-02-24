"use client";
import React, { useState } from "react";
import CarouselNav from "./CarouselNav";
import useNavigate from "@/hooks/useNavigate";
import { SectionImages } from "@/constants/images";
import Image from "next/image";

const Carousel = () => {
  const { navigate } = useNavigate();
  const [currentImage, setCurrentImage] = useState(
    SectionImages[SectionImages.length - 1]
  );
  const [prevImage, setPrevImage] = useState(SectionImages[0]);
  const [nextImage, setNextImage] = useState(SectionImages[1]);

  const moveLeft = () => {
    const currentIndex = SectionImages.indexOf(currentImage);
    console.log(currentIndex);

    const newIndex =
      (currentIndex - 1 + SectionImages.length) % SectionImages.length;
    console.log(newIndex);

    setCurrentImage(SectionImages[newIndex]);

    console.log(SectionImages.length % SectionImages.length);

    setPrevImage(
      SectionImages[
        (newIndex - 1 + SectionImages.length) % SectionImages.length
      ]
    );
    setNextImage(SectionImages[(newIndex + 1) % SectionImages.length]);
  };
  const moveRight = () => {
    const currentIndex = SectionImages.indexOf(currentImage);

    const newIndex = (currentIndex + 1) % SectionImages.length;
    console.log(newIndex);

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
      <div className="container h-[25%] flex items-center justify-evenly mb-[2rem]">
        <article className="w-[20%] h-fit ring-[1px] rounded-[16px] mt-[8%] flex items-center justify-center">
          <Image src={prevImage.image} alt="section" />
        </article>
        <article className="w-[50%] h-fit ring-[1px] rounded-[16px] flex items-center justify-center">
          <Image src={currentImage.image} alt="section" />
        </article>
        <article className="w-[20%] h-fit ring-[1px] rounded-[16px] mt-[8%] flex items-center justify-center">
          <Image src={nextImage.image} alt="section" />
        </article>
      </div>
      <CarouselNav
        left={moveLeft}
        right={moveRight}
        onClick={() => navigate("")}
      />
      <div>
        <p>Text</p>
      </div>
    </section>
  );
};

export default Carousel;
