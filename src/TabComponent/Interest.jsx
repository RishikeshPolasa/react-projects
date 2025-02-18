import React from "react";
import {
  Input,
  InputWrapper,
  Label,
  TextArea,
  InterestWrapper,
  Error,
} from "./Style";

function Interest(props) {
  const { handleTabState, tabState, error } = props;
  return (
    <InterestWrapper>
      Interest
      <InputWrapper>
        <Label>Hobbies: </Label>
        <TextArea
          placeholder="Enter your hobbies"
          type="text"
          onChange={(e) => handleTabState("interest", e, "hobbies")}
          value={tabState?.interest?.hobbies}
        />
        <Error>{error?.interest?.hobbies}</Error>
      </InputWrapper>
    </InterestWrapper>
  );
}

export default Interest;
