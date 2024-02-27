import React from "react";
import { LeftIcon, RightIcon } from "../Icons/Icons";
import { PrimaryButton } from "../buttons/Buttons";

type NavProps = {
  left: () => void;
  onClick: () => void;
  right: () => void;
};

const CarouselNav = ({ onClick, left, right }: NavProps) => {
  return (
    <div className="container max-w-[80%] flex items-center justify-between px-[2rem]">
      <LeftIcon onClick={left} />
      <PrimaryButton text="Learn" onClick={onClick} />
      <RightIcon onClick={right} />
    </div>
  );
};

export default CarouselNav;
