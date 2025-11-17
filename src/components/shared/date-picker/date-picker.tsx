import React, { JSX, useMemo, useRef, useState } from "react";
import { addDays, startOfToday } from "date-fns";
import {
  Root,
  DateGroupWrapper,
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
import Chevron from "@/components/icons/chevron";

type Props = {
  /** emit selected date+time as Date + formatted time string */
  onChange?: (value: {
    date: Date | null;
    timeISO: string | null;
    timeLabel: string | null;
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
  const [daysScrollable, setDaysScrollable] = useState<
    "left" | "right" | "both"
  >("left");
  const [timeScrollable, setTimeScrollable] = useState<
    "left" | "right" | "both"
  >("left");

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
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += minutesStep) {
        const date = new Date(selectedDate);

        date.setHours(hours, minutes, 0, 0);

        if (date < now) continue; // exclude past times

        const iso = date.toISOString();
        // format label 12-hour hh:mm AM/PM
        const label = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        slots.push({ iso, label });
      }
    }
    return slots;
  }, [selectedDate, minutesStep]);

  const checkDateDisabled = (d: Date): boolean => {
    if (disableWeekends) {
      const day = d.getDay();

      if (day === 0 || day === 6) return true;
    }

    if (typeof disabledDate === "function") {
      return disabledDate(d);
    }

    return false;
  };

  const handleSelectDate = (d: Date) => {
    if (checkDateDisabled(d)) return;

    setSelectedDate(d);
    setSelectedTimeISO(null);
    onChange?.({ date: selectedDate, timeISO: null, timeLabel: null });

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
  };

  const handleSelectTime = (iso: string, label: string) => {
    setSelectedTimeISO(iso);
    onChange?.({ date: selectedDate, timeISO: iso, timeLabel: label });

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
  };

  const scrollRow = (
    el: HTMLElement | null,
    dir: "left" | "right",
    step: number = 72 * 3,
  ) => {
    if (!el) return;

    el.scrollBy({
      left: (dir === "left" ? -1 : 1) * step,
      behavior: "smooth",
    });
  };

  const handleDaysScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (!e.currentTarget) return;

    const {
      scrollLeft = 0,
      clientWidth = 0,
      scrollWidth = 0,
    } = e.target as HTMLElement;

    setDaysScrollable(
      !scrollLeft
        ? "left"
        : scrollLeft + clientWidth >= scrollWidth - 1
          ? "right"
          : "both",
    );
  };

  const handleTimeScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (!e.currentTarget) return;

    const {
      scrollLeft = 0,
      clientWidth = 0,
      scrollWidth = 0,
    } = e.target as HTMLElement;

    setTimeScrollable(
      !scrollLeft
        ? "left"
        : scrollLeft + clientWidth >= scrollWidth - 1
          ? "right"
          : "both",
    );
  };

  return (
    <Root>
      <DateGroupWrapper>
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
            onClick={() => scrollRow(daysScrollRef.current, "left")}
          >
            <Chevron
              direction="left"
              color={daysScrollable !== "left" ? "#16171B" : "#C0C1D1"}
            />
          </NavButton>

          <ScrollRow
            ref={daysScrollRef}
            role="list"
            aria-label="dates row"
            onScroll={handleDaysScroll}
          >
            {days.map((d) => {
              const disabled = checkDateDisabled(d);
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
            onClick={() => scrollRow(daysScrollRef.current, "right")}
          >
            <Chevron
              direction="right"
              color={daysScrollable !== "right" ? "#16171B" : "#C0C1D1"}
            />
          </NavButton>
        </RowWrapper>
      </DateGroupWrapper>

      {selectedDate ? (
        <TimeRow>
          <NavButton
            aria-label="prev-time"
            onClick={() => scrollRow(timesScrollRef.current, "left")}
          >
            <Chevron
              direction="left"
              color={timeScrollable !== "left" ? "#16171B" : "#C0C1D1"}
            />
          </NavButton>

          <ScrollRow
            ref={timesScrollRef}
            role="list"
            aria-label="times row"
            $asTime
            onScroll={handleTimeScroll}
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
            onClick={() => scrollRow(timesScrollRef.current, "right")}
          >
            <Chevron
              direction="right"
              color={timeScrollable !== "right" ? "#16171B" : "#C0C1D1"}
            />
          </NavButton>
        </TimeRow>
      ) : null}
    </Root>
  );
}
