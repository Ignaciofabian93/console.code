import { StaticImageData } from "next/image";

export type IconProps = {
  src: StaticImageData;
  alt: string;
  width?: number | 35;
  height?: number | 35;
};
