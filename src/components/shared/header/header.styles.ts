"use client";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 20px 135px 27px;
  background: #00000033;
  border-bottom: 1px solid #ffffff66;
  backdrop-filter: blur(68px);
`;

export const Title = styled.h2`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0;
  vertical-align: middle;
`;
