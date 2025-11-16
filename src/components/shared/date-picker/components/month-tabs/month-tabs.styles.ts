import styled from "styled-components";

export const MonthsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 48px;
  gap: 45px;
`;

export const MonthButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  background: none;

  font-family: var(--font-poppins), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0;
  vertical-align: middle;

  transition: color 0.3s;

  &:hover {
    color: var(--text-primary);
  }
`;
