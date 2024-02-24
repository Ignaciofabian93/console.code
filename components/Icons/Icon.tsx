import Image from "next/image";
import React from "react";
import { IconProps } from "@/types/icons";

const Icon: React.FC<IconProps> = ({ src, alt, width, height }) => {
  return (
    <div className="w-fit h-fit p-[8px] cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="dark:invert"
      />
    </div>
  );
};

export default Icon;
