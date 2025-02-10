import Styled from "styled-components";

export const TabWrapper = Styled.div`
    border:1px solid black;
    margin:1rem;
    border-radius:0.5rem;
`;

export const TabHeader = Styled.div`
    display:flex;
    gap:1.5rem;
`;

export const Tab = Styled.div`
    border-radius:0.5rem;
    border:1px solid gray;
    padding:0.5rem;
`;
export const ActiveComponentWrapper = Styled.div``;

export const ProfileWrapper = Styled.div`
    padding:1rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
export const InputWrapper = Styled.div`
    display:flex;
    gap:1rem;
    align-items:center;
`;
export const Input = Styled.input``;

export const Label = Styled.label`
    min-width:5rem;
    text-align:left;
`;

export const Error = Styled.div`
    color:red;
    font-size:0.5rem;
`;

export const InterestWrapper = Styled.div`
    padding:1rem;
`;

export const TextArea = Styled.textarea`
    max-width:20rem;
    min-width:10rem;
    min-height:4rem;
    max-height: 10rem;
`;
export const SettingsWrapper = Styled.div`
    padding:1rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
export const SubmitButton = Styled.button`
    padding:1rem;
    border:1px solid black;
    border-radius:0.5rem;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
