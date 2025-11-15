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
  pointer-events: ${({ $isActive }) => ($isActive ? "none" : "auto")};
  touch-action: ${({ $isActive }) => ($isActive ? "none" : "auto")};

  font-family: var(--font-poppins);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3%;
  text-align: center;
  vertical-align: middle;
`;
