import styled from "styled-components";

export const DayButton = styled.button<{
  $selected?: boolean;
  $disabled?: boolean;
}>`
  min-width: 64px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid
    ${({ $selected }) => ($selected ? "transparent" : "#e8ebf4")};
  background: #fff;
  color: var(
    ${({ $selected }) => ($selected ? "--text-accent" : "--text-primary")}
  );
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: translateY(1px);
  }
`;

export const DayDetails = styled.div`
  font-family: var(--font-poppins), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
`;
