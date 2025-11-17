import styled from "styled-components";

export const TimeButton = styled.button<{ $selected?: boolean }>`
  flex: 1 0 auto;
  width: 81px;
  height: 45px;
  padding: 2px 5px;
  border-radius: 100px;
  border: 1px solid
    ${({ $selected }) => ($selected ? "transparent" : "#e8ebf4")};
  background: #fff;
  color: var(
    ${({ $selected }) => ($selected ? "--text-accent" : "--text-primary")}
  );
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: translateY(2px);
  }
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
