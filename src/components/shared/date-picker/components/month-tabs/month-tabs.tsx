import React, { JSX } from "react";
import { MonthsWrapper, MonthButton } from "./month-tabs.styles";
import { format } from "date-fns";

type Props = {
  months: Date[];
  activeIndex: number;
  onClickMonth: (index: number) => void;
};

export function MonthTabs({
  months,
  activeIndex,
  onClickMonth,
}: Props): JSX.Element {
  return (
    <MonthsWrapper role="tablist" aria-label="months">
      {months.map((m, i) => {
        const active = i === activeIndex;

        return (
          <MonthButton
            key={m.toISOString()}
            active={active}
            onClick={() => onClickMonth(i)}
            aria-selected={active}
            role="tab"
          >
            {format(m, "MMM yyyy")}
          </MonthButton>
        );
      })}
    </MonthsWrapper>
  );
}
