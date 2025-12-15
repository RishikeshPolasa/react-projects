import styled from "styled-components";

export const Wrapper = styled.div`
  display: column;
  gap: 0.4rem;
  text-align: left;
  margin-left: ${({ margin }) => margin + "px"};
`;
export const NameWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`;
export const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
  width: 15rem;
  height: 10rem;
  z-index: 1;
  background-color: white;
`;

export const Input = styled.input``;
export const Popup = styled.div`
  display: ${({ popup }) => (popup ? "block" : "none")};
`;
