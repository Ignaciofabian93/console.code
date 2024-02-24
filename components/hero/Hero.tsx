"use client";
import React from "react";
import { PrimaryButton } from "@/components/buttons/Buttons";
import useNavigate from "@/hooks/useNavigate";

const Hero = () => {
  const { navigate } = useNavigate();

  return (
    <section className="container h-[60%] flex flex-col items-center justify-evenly p-[16px]">
      <h1 className="text-4xl text-content1 font-bold ml-4 text-center">
        console.code()
      </h1>
      <h2 className="text-content1 text-2xl text-center">
        Guide and cheatsheet for developers
      </h2>
      <PrimaryButton text="See more" onClick={() => navigate("/sections")} />
    </section>
  );
};

export default Hero;
