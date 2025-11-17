import styled from "styled-components";

export const TimeButton = styled.button<{ $selected?: boolean }>`
  flex: 1 0 auto;
  width: 81px;
  height: 45px;
  //padding: 10px 18px;
  //min-width: 96px;
  border-radius: 100px;
  border: 1px solid
    ${({ $selected }) => ($selected ? "transparent" : "#e8ebf4")};
  background: #fff;
  color: var(
    ${({ $selected }) => ($selected ? "--text-accent" : "--text-primary")}
  );
  cursor: pointer;
  transition:
    transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1),
    opacity 300ms ease;
  opacity: 1;
`;

export const TimeDetails = styled.span`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
`;
