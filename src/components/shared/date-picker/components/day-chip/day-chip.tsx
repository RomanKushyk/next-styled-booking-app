import React, { JSX } from "react";
import { DayButton, DayDetails } from "./day-chip.styles";
import { format } from "date-fns";

type Props = {
  date: Date;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export function DayChip({
  date,
  onClick,
  disabled = false,
  selected = false,
  ...rest
}: Props): JSX.Element {
  return (
    <DayButton
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={selected}
      $selected={selected}
      $disabled={disabled}
      {...rest}
    >
      <DayDetails>{format(date, "EEE")}</DayDetails>

      <DayDetails>{format(date, "d")}</DayDetails>
    </DayButton>
  );
}
