"use client";
import React from "react";
import MainLayout from "@/app/ui/layouts/MainLayout";
import useNavigate from "@/hooks/useNavigate";
import Image from "next/image";
import { javascript } from "@/constants/images";
import { AnimatePresence, motion } from "framer-motion";
import { PrimaryButton } from "@/components/buttons/Buttons";

const JavaScript = () => {
  const { navigate } = useNavigate();
  return (
    <MainLayout>
      <AnimatePresence>
        <motion.div
          key={"text_image"}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}
          className="container flex flex-col items-center justify-center px-[2rem]"
        >
          <Image
            key={"image"}
            src={javascript}
            alt="JavaScript"
            className="w-[200px] h-[200px]"
          />
          <motion.p
            key={"text"}
            className="container max-w-[768px] text-center mt-[1rem]"
          >
            JavaScript is a dynamic programming language used for web
            development, in web applications, for game development, and lots
            more. It allows you to implement dynamic features on web pages that
            cannot be done with only HTML and CSS.
          </motion.p>
        </motion.div>
        <motion.div
          key={"btn"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="container flex items-center justify-center"
        >
          <PrimaryButton
            key={"js-home"}
            text="Variables"
            onClick={() => navigate("/sections/javascript/variables")}
          />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
  );
};

export default JavaScript;
