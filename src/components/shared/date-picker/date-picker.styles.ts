"use client";
import styled from "styled-components";

/* Root wrapper */
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

/* Months row */
export const MonthsRowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

/* Day row wrapper with fade shadows via pseudo-elements */
export const RowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

/* navigation arrows */
export const NavButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  color: #000;
`;

/* scroll row - generic for days & times */
export const ScrollRow = styled.div<{ asTime?: boolean }>`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 10px 6px;
  scroll-behavior: smooth;

  /* hide native scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* soft white fade shadows on edges using mask */
  position: relative;
  flex: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 48px;
    pointer-events: none;
    z-index: 3;
  }
  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
  &::after {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const TimeRow = styled.div`
  display: flex;
  align-items: center;
`;

export const EmptyPlaceholder = styled.div`
  padding: 14px;
  color: rgba(0, 0, 0, 0.6);
`;
