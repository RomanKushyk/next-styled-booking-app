import React, { useEffect, useState } from "react";

export function useSwipeScroll(ref?: React.RefObject<HTMLElement | null>) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const pointerDownHandler = (
    e: PointerEvent,
    setIsDown: (v: boolean) => void,
    setStartX: (v: number) => void,
    setScrollLeft: (v: number) => void,
    el: HTMLElement,
  ) => {
    setIsDown(true);
    setStartX(e.clientX);
    setScrollLeft(el.scrollLeft);

    (e.target as Element)?.setPointerCapture?.(e.pointerId);
  };

  const pointerMoveHandler = (
    e: PointerEvent,
    isDown: boolean,
    startX: number,
    scrollLeft: number,
    el: HTMLElement,
  ) => {
    if (!isDown) return;

    const walk = startX - e.clientX;
    el.scrollLeft = scrollLeft + walk;
  };

  const pointerUpHandler = (
    e: PointerEvent,
    setIsDown: (v: boolean) => void,
  ) => {
    setIsDown(false);
    (e.target as Element)?.releasePointerCapture?.(e.pointerId);
  };

  useEffect(() => {
    const el = ref?.current;

    if (!el) return;

    const handlePointerDown = (e: PointerEvent) =>
      pointerDownHandler(e, setIsDown, setStartX, setScrollLeft, el);

    const handlePointerMove = (e: PointerEvent) =>
      pointerMoveHandler(e, isDown, startX, scrollLeft, el);

    const handlePointerUp = (e: PointerEvent) => pointerUpHandler(e, setIsDown);

    el.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      el.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [ref, isDown, startX, scrollLeft]);
}
