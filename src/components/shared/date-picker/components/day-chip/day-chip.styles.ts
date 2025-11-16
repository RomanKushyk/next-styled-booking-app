import styled from "styled-components";

export const DayButton = styled.button<{
  selected?: boolean;
  $disabled?: boolean;
}>`
  display: grid;
  gap: 2px;
  padding: 10px 14px;
  min-width: 78px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ selected }) => (selected ? "rgba(17,24,39,0.06)" : "#fff")};
  color: ${({ selected }) => (selected ? "#111827" : "rgba(0,0,0,0.85)")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  transition:
    box-shadow 200ms ease,
    transform 160ms ease,
    background 200ms ease;
  &:active {
    transform: translateY(1px);
  }
`;

export const DayDow = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
export const DayDom = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
export const DayMon = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;
