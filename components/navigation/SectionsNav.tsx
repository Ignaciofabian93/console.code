import React from "react";
import { LeftIcon, RightIcon } from "../Icons/Icons";

type SectionNavProps = {
  left: () => void;
  right: () => void;
};

const SectionsNav = ({ left, right }: SectionNavProps) => {
  return (
    <div className="flex items-center justify-between">
      <LeftIcon onClick={left} />
      <RightIcon onClick={right} />
    </div>
  );
};

export default SectionsNav;
