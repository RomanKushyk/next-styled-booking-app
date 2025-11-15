"use client";
import styled from "styled-components";

export const ButtonEl = styled.button<{ $isActive: boolean }>`
  max-width: 370px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 8px;
  border-radius: 100px;
  border: none;
  outline: none;
  background: var(
    ${({ $isActive }) => ($isActive ? "--button-active" : "--button-inactive")}
  );
  cursor: ${({ $isActive }) => ($isActive ? "pointer" : "not-allowed")};
  pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  touch-action: ${({ $isActive }) => ($isActive ? "auto" : "none")};
  transition:
    scale 0.3s,
    filter 0.3s;

  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3%;
  text-align: center;
  vertical-align: middle;

  &:hover {
    filter: drop-shadow(0 0 20px #00000080);
  }

  &:active {
    scale: 0.99;
  }
`;
