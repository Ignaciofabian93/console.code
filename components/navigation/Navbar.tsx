"use client";
import React, { useState } from "react";
import CustomSwitch from "@/components/switch/Switch";
import { sunIcon, moonIcon } from "@/constants/icons";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuIcon } from "@/components/Icons/Icons";
import { navData } from "./data";
import useNavigate from "@/hooks/useNavigate";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-[4rem] flex items-center justify-center relative p-[0.5rem]">
      <div className="w-fit h-fit flex items-center justify-center absolute top-[5%] left-[1%] z-20 md:hidden">
        <MenuIcon onClick={toggleMenu} invertColor={isOpen} />
      </div>
      <div className="w-full flex items-center justify-end">
        <CustomSwitch
          toggle={() => setTheme(theme === "light" ? "dark" : "light")}
          startContent={
            <Image
              src={sunIcon}
              alt="sun"
              style={{ width: "22px" }}
              className="w-[12px] h-[12px]"
            />
          }
          endContent={
            <Image
              src={moonIcon}
              alt="moon"
              style={{ width: "22px" }}
              className="w-[12px] h-[12px]"
            />
          }
        />
      </div>
      <aside
        className="w-full h-screen pt-[4rem] bg-gradient-to-b from-overlay to bg-primary-500 absolute left-0 top-0 z-10 transition-all duration-300 ease-in-out dark:bg-gradient-to-b dark:from-overlay to dark:bg-primary-200"
        style={{ transform: isOpen ? "translateX(0%)" : "translateX(-100%)" }}
      >
        <ul className="container px-[1rem] py-[2rem]">
          {navData.map((item) => (
            <li
              key={item.title}
              className="my-[2rem] cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <div className="w-full flex items-center">
                <svg
                  xmlns={item.icon.link}
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="invert w-[30px] h-[30px]"
                >
                  <path d={item.icon.path}></path>
                </svg>
                <span className="text-white ml-[1rem]">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
