"use client";
import React from "react";
import { ButtonEl } from "./button.styles";

interface Props {
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

export default function Button({ children, isActive = true, onClick }: Props) {
  const handleClick = (): void => {
    if (isActive) {
      onClick?.();
    }
  };

  return (
    <ButtonEl $isActive={isActive} onClick={handleClick}>
      {children}
    </ButtonEl>
  );
}
