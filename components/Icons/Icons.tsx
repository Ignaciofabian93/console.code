import React from "react";

type IconProps = {
  onClick?: () => void;
  invertColor?: boolean;
};

export const MenuIcon = ({ onClick, invertColor }: IconProps) => {
  const invert = invertColor ? "invert" : "";
  return (
    <div className="p-[14px]" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
        className={`cursor-pointer ${invert} dark:invert`}
      >
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
    </div>
  );
};

export const LeftIcon = ({ onClick }: IconProps) => {
  return (
    <div className="bg-primary-500 p-[0.5rem] rounded-[50%]" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000000"
        viewBox="0 0 256 256"
        className={`cursor-pointer invert`}
      >
        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
      </svg>
    </div>
  );
};

export const RightIcon = ({ onClick }: IconProps) => {
  return (
    <div className="bg-primary-500 p-[0.5rem] rounded-[50%]" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000000"
        viewBox="0 0 256 256"
        className={`cursor-pointer invert`}
      >
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>
    </div>
  );
};
