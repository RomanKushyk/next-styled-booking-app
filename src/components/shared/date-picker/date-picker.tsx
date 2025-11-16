import React, { JSX, useMemo, useRef, useState } from "react";
import { addDays, startOfToday } from "date-fns";
import {
  Root,
  MonthsRowWrapper,
  RowWrapper,
  ScrollRow,
  NavButton,
  TimeRow,
  EmptyPlaceholder,
} from "./date-picker.styles";
import { MonthTabs } from "./components/month-tabs/month-tabs";
import { DayChip } from "./components/day-chip/day-chip";
import { TimeChip } from "./components/time-chip/time-chip";
import { useMonthTracking } from "./hooks/use-month-tracking";
import { useSwipeScroll } from "./hooks/use-swipe-controll";

type Props = {
  /** emit selected date+time as Date + formatted time string */
  onChange?: (value: {
    date: Date;
    timeISO: string;
    timeLabel: string;
  }) => void;
  /** custom disabled function */
  disabledDate?: (date: Date) => boolean;
  /** disable weekends */
  disableWeekends?: boolean;
  /** how many days to show (42 default = 6 weeks) */
  daysCount?: number;
  /** time interval minutes (15 default) */
  minutesStep?: number;
  /** animation duration ms (>=300) */
  animationMs?: number;
};

export default function DateTimeSelector({
  onChange,
  disabledDate,
  disableWeekends = false,
  daysCount = 42,
  minutesStep = 15,
  animationMs = 300,
}: Props): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeISO, setSelectedTimeISO] = useState<string | null>(null);

  const days = useMemo(() => {
    const today = startOfToday();
    return Array.from({ length: daysCount }).map((_, i) => addDays(today, i));
  }, [daysCount]);

  // refs for scroll containers
  const daysScrollRef = useRef<HTMLDivElement | null>(null);
  const timesScrollRef = useRef<HTMLDivElement | null>(null);

  // month tracking hook: watches which month is visible and returns months list and activeMonthIndex
  const { months, activeMonthIndex, scrollToMonthIndex } = useMonthTracking({
    days,
    containerRef: daysScrollRef,
  });

  // swipe behavior for days and times
  useSwipeScroll(daysScrollRef);
  useSwipeScroll(timesScrollRef);

  // generate times for selected date (12h format labels, ISO string values)
  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    const slots: { iso: string; label: string }[] = [];
    const now = new Date();

    // iterate hours 0..23 and steps
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += minutesStep) {
        const d = new Date(selectedDate);
        d.setHours(h, m, 0, 0);
        if (d < now) continue; // exclude past times
        const iso = d.toISOString();
        // format label 12-hour hh:mm AM/PM
        const label = d.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        slots.push({ iso, label });
      }
    }
    return slots;
  }, [selectedDate, minutesStep]);

  const isDateDisabled = (d: Date): boolean => {
    if (disableWeekends) {
      const day = d.getDay();
      if (day === 0 || day === 6) return true;
    }
    if (typeof disabledDate === "function") {
      return disabledDate(d);
    }
    return false;
  };

  function handleSelectDate(d: Date) {
    if (isDateDisabled(d)) return;
    setSelectedDate(d);
    setSelectedTimeISO(null);
    // onChange not called until time selected
    // scroll to center selected date (nice UX)
    const container = daysScrollRef.current;
    if (container) {
      const el = container.querySelector(
        `[data-date="${d.toISOString()}"]`,
      ) as HTMLElement | null;
      if (el) {
        const center =
          el.offsetLeft + el.offsetWidth / 2 - container.clientWidth / 2;
        container.scrollTo({ left: center, behavior: "smooth" });
      }
    }
  }

  function handleSelectTime(iso: string, label: string) {
    setSelectedTimeISO(iso);
    if (selectedDate && onChange) {
      onChange({ date: selectedDate, timeISO: iso, timeLabel: label });
    }
    // optional: auto-scroll time into center
    const container = timesScrollRef.current;
    if (container) {
      const el = container.querySelector(
        `[data-time="${iso}"]`,
      ) as HTMLElement | null;
      if (el) {
        const center =
          el.offsetLeft + el.offsetWidth / 2 - container.clientWidth / 2;
        container.scrollTo({ left: center, behavior: "smooth" });
      }
    }
  }

  return (
    <Root>
      <MonthsRowWrapper>
        <MonthTabs
          months={months}
          activeIndex={activeMonthIndex}
          onClickMonth={(idx) => {
            scrollToMonthIndex(idx);
          }}
        />
      </MonthsRowWrapper>

      <RowWrapper>
        <NavButton
          aria-label="prev"
          onClick={() =>
            daysScrollRef.current?.scrollBy({ left: -240, behavior: "smooth" })
          }
        >
          ‹
        </NavButton>

        <ScrollRow ref={daysScrollRef} role="list" aria-label="dates row">
          {days.map((d) => {
            const disabled = isDateDisabled(d);
            return (
              <DayChip
                key={d.toISOString()}
                date={d}
                onClick={() => handleSelectDate(d)}
                disabled={disabled}
                selected={
                  selectedDate
                    ? d.toDateString() === selectedDate.toDateString()
                    : false
                }
                data-date={d.toISOString()}
              />
            );
          })}
        </ScrollRow>

        <NavButton
          aria-label="next"
          onClick={() =>
            daysScrollRef.current?.scrollBy({ left: 240, behavior: "smooth" })
          }
        >
          ›
        </NavButton>
      </RowWrapper>

      {selectedDate ? (
        <TimeRow>
          <NavButton
            aria-label="prev-time"
            onClick={() =>
              timesScrollRef.current?.scrollBy({
                left: -240,
                behavior: "smooth",
              })
            }
          >
            ‹
          </NavButton>

          <ScrollRow
            ref={timesScrollRef}
            role="list"
            aria-label="times row"
            asTime
          >
            {timeSlots.length === 0 ? (
              <EmptyPlaceholder>No available times</EmptyPlaceholder>
            ) : (
              timeSlots.map((t, idx) => (
                <TimeChip
                  key={t.iso}
                  iso={t.iso}
                  label={t.label}
                  index={idx}
                  animationMs={Math.max(animationMs, 300)}
                  selected={selectedTimeISO === t.iso}
                  onClick={() => handleSelectTime(t.iso, t.label)}
                  data-time={t.iso}
                />
              ))
            )}
          </ScrollRow>

          <NavButton
            aria-label="next-time"
            onClick={() =>
              timesScrollRef.current?.scrollBy({
                left: 240,
                behavior: "smooth",
              })
            }
          >
            ›
          </NavButton>
        </TimeRow>
      ) : null}
    </Root>
  );
}
