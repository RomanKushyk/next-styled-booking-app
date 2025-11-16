import styled from "styled-components";

export const MonthsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const MonthButton = styled.button<{ active?: boolean }>`
  padding: 6px 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "#111827" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "rgba(0,0,0,0.7)")};
  font-weight: 600;
  font-size: 13px;
`;
