import styled from "styled-components";

export const TimeButton = styled.button<{ selected?: boolean }>`
  padding: 10px 18px;
  min-width: 96px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${({ selected }) => (selected ? "rgba(17,24,39,0.06)" : "#fff")};
  color: ${({ selected }) => (selected ? "#111827" : "rgba(0,0,0,0.85)")};
  cursor: pointer;
  transition:
    transform 300ms cubic-bezier(0.2, 0.9, 0.3, 1),
    opacity 300ms ease;
  opacity: 1;
`;
