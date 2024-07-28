import styled from "styled-components";
import ArrowDownward from "../Icons/ArrowDownward";
export const AccordianWrapper = styled.div`
  border-radius: 1rem;
  padding: 0 1rem;
`;
export const AccordianHeading = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`;

export const AccordianWrp = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ isActive }) => (isActive ? "#B9F8E1" : "#E4F7F0")};
`;
export const Heading = styled.div`
  padding: 1rem 0;
`;
export const SubHeading = styled.div`
  height: ${({ isActive }) => (isActive ? "fit-content" : "0")};
  overflow: hidden;
  width: fit-content;
  transition: height 0.3s ease-out;
  padding: ${({ isActive }) => (isActive ? "0 1rem 1rem 1rem" : "0 5px")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: height 0.3s ease-out, padding 0.3s ease-out;
  text-align: left;
`;
export const ArrowDowwardIcon = styled(ArrowDownward)`
  transform: ${({ isActive }) =>
    !isActive ? "rotate(90deg)" : "rotate(270deg)"};
  width: 2rem;
  height: 2rem;
`;
export const HeadingAndArrowWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  cursor: pointer;
`;
