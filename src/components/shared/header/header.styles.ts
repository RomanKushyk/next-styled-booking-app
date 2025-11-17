"use client";
import styled from "styled-components";
import { DEVICE } from "@/constants/deviceSizes";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px 135px 27px;
  background: #00000033;
  border-bottom: 1px solid #ffffff66;
  backdrop-filter: blur(68px);

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  color: var(--text-light);
`;

export const Title = styled.h2`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 0;
  vertical-align: middle;
`;
