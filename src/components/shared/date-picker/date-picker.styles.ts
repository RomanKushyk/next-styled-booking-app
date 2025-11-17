"use client";
import styled from "styled-components";
import { DEVICE } from "@/constants/deviceSizes";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @media ${DEVICE.tablet} {
    gap: 32px;
  }

  @media ${DEVICE.xsHeight} {
    gap: 24px;
  }
`;

export const DateGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  width: 100%;
`;

export const MonthsRowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RowWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

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
  -webkit-tap-highlight-color: transparent;

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

export const ScrollRow = styled.div<{ $asTime?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

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
