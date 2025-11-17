"use client";
import styled from "styled-components";

/* Root wrapper */
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const DateGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
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
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

/* navigation arrows */
export const NavButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

/* scroll row - generic for days & times */
export const ScrollRow = styled.div<{ $asTime?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
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

  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 48px,
    black calc(100% - 48px),
    transparent 100%
  );
  mask-size: 100% 100%;
  mask-repeat: no-repeat;

`;

export const TimeRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export const EmptyPlaceholder = styled.div`
  padding: 14px;
  color: rgba(0, 0, 0, 0.6);
`;
