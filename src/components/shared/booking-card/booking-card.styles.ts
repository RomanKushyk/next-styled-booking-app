"use client";
import styled from "styled-components";
import { DEVICE } from "@/constants/deviceSizes";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media ${DEVICE.tablet} {
    justify-content: flex-end;
  }
`;

export const OuterHeader = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${DEVICE.tablet} {
    display: flex;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 568px;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 40px 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 20px 52px 0 #00000040;

  @media ${DEVICE.tablet} {
    max-height: 61dvh;
    margin-top: 0;
    border-radius: 24px 24px 0 0;
    transform: translate(0, 0);
  }
`;

export const CardHeader = styled.div``;

export const CardContent = styled.div``;
