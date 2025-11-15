import React from "react";
import { ButtonEl } from "./button.styles";

interface Props {
  children: React.ReactNode;
  isActive: boolean;
}

export default function Button({ children, isActive = true }: Props) {
  return <ButtonEl isActive={isActive}>{children}</ButtonEl>;
}
