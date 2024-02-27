"use client";
import React from "react";
import { Button } from "@nextui-org/react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      className="bg-primary text-foreground rounded-[8px]"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <Button
      className="bg-foreground text-primary ring-[1px] ring-primary-500 rounded-[8px]"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
