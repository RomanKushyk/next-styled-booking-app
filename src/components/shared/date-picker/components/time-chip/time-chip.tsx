import React, { JSX } from "react";
import { TimeButton } from "./time-chip.styles";

type Props = {
  iso: string;
  label: string;
  index?: number;
  animationMs: number;
  selected?: boolean;
  onClick: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export function TimeChip({
  iso,
  label,
  index = 0,
  animationMs,
  selected = false,
  onClick,
  ...rest
}: Props): JSX.Element {
  const delay = Math.min(200 + index * 20, 800); // cascade delay cap

  return (
    <TimeButton
      onClick={onClick}
      selected={selected}
      style={{
        transitionDuration: `${animationMs}ms`,
        transitionDelay: `${delay}ms`,
      }}
      data-iso={iso}
      {...rest}
    >
      {label}
    </TimeButton>
  );
}
