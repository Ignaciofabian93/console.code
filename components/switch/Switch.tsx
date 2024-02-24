import React from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

type SwitchProps = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  text?: string;
  toggle: () => void;
};

const CustomSwitch: React.FC<SwitchProps> = ({
  startContent,
  endContent,
  text,
  toggle,
}) => {
  const { theme } = useTheme();

  return (
    <Switch
      isSelected={theme === "light"}
      size="lg"
      color="primary"
      onValueChange={toggle}
      startContent={startContent}
      endContent={endContent}
    >
      {text}
    </Switch>
  );
};

export default CustomSwitch;
