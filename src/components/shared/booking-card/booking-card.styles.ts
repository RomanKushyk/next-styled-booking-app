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

export const Banner = styled.div`
  position: relative;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  pointer-events: auto;

  @media ${DEVICE.tablet} {
    display: flex;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px 8.7dvh;
  gap: 24px;

  font-family: var(--font-poppins), sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: var(--text-light);
`;

export const SessionDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SessionTitle = styled.h2`
  font-weight: 500;
  font-size: 27px;
  line-height: 41px;
  letter-spacing: 0;
  vertical-align: middle;
`;

export const SessionSubtitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  vertical-align: middle;
`;

export const SessionDuration = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  gap: 8px;
  color: var(--text-light);
  border-radius: 80px;
  background: #ffffff29;
  backdrop-filter: blur(12px);

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
  vertical-align: middle;
`;

export const OuterHeaderImage = styled.img`
  position: absolute;
  bottom: -41px;
  right: -29px;
  max-width: 202px;
  aspect-ratio: 202 / 290;
  object-fit: contain;
  object-position: top center;
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
  gap: 40px;
  margin-top: 10px;
  padding: 40px 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 20px 52px 0 #00000040;
  pointer-events: auto;

  @media ${DEVICE.tablet} {
    max-height: 61dvh;
    margin-top: 0;
    padding: 32px 20px 12px;
    gap: 32px;
    border-radius: 24px 24px 0 0;
    transform: translate(0, 0);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 23px 0 48px;

  @media ${DEVICE.tablet} {
    padding: 0;
  }
`;

export const HeaderImage = styled.img`
  width: 120px;
  aspect-ratio: 1 / 1;
  border-radius: 100px;
  object-fit: cover;
  object-position: top right;

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;

  font-family: var(--font-poppins), sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`;

export const HeaderTitle = styled.h2`
  font-family: var(--font-kaisei-tokumin), sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0;
  vertical-align: middle;
  color: var(--text-primary);
`;

export const HeaderSubTitle = styled.h3`
  font-weight: 400;
  color: var(--text-secondary);

  @media ${DEVICE.tablet} {
    font-size: 16px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
