import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: repeat(3, 1fr); /* 3 equal rows */
  gap: 10px;
  border: 1px solid black;
`;

export const Grid = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ filled }) => (filled ? "green" : "white")};
  border: 1px solid ${({ filled }) => (filled ? "green" : "black")};
`;
