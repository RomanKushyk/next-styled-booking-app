import React, { useEffect, useMemo, useState } from "react";
import { startOfMonth, isSameMonth } from "date-fns";

interface Props {
  days: Date[];
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function useMonthTracking({ days, containerRef }: Props) {
  const months = useMemo(() => {
    const arr: Date[] = [];

    days.forEach((d) => {
      const first = startOfMonth(d);

      if (!arr.some((m) => isSameMonth(m, first))) {
        arr.push(first);
      }
    });

    return arr;
  }, [days]);

  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  useEffect(() => {
    const container = containerRef?.current;

    if (!container) return;

    const dayEls = Array.from(
      container.querySelectorAll<HTMLElement>("[data-date]"),
    );

    if (!dayEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // find entry with the largest visible area that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);

        if (!visible.length) return;

        // choose a target whose center is closest to a container center
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const best: { el?: Element; dist?: number } = {};

        visible.forEach((e) => {
          const r = e.target.getBoundingClientRect();
          const center = r.left + r.width / 2;
          const dist = Math.abs(center - containerCenter);

          if (!best.dist || dist < best.dist) {
            best.el = e.target;
            best.dist = dist;
          }
        });

        if (!best.el) return;

        const dateIso = best.el.getAttribute("data-date");

        if (!dateIso) return;

        const date = new Date(dateIso);
        const idx = months.findIndex((m) => isSameMonth(m, date));

        if (idx >= 0) setActiveMonthIndex(idx);
      },
      {
        root: container,
        threshold: [0.25, 0.5, 0.75],
      },
    );

    dayEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, months]);

  function scrollToMonthIndex(index: number) {
    const container = containerRef?.current;

    if (!container) return;

    // find first day element for a month
    const targetMonth = months[index];

    if (!targetMonth) return;

    const el = Array.from(
      container.querySelectorAll<HTMLElement>("[data-date]"),
    ).find((e) => {
      const iso = e.getAttribute("data-date");

      if (!iso) return false;

      const d = new Date(iso);

      return (
        d.getMonth() === targetMonth.getMonth() &&
        d.getFullYear() === targetMonth.getFullYear()
      );
    }) as HTMLElement | undefined;

    if (!el) return;

    // scroll so el becomes start-of-view with a small offset
    container.scrollTo({ left: el.offsetLeft - 12, behavior: "smooth" });
  }

  return { months, activeMonthIndex, scrollToMonthIndex };
}
