import React from "react";
import {
  Error,
  Input,
  InputWrapper,
  Label,
  SettingsWrapper,
  SubmitButton,
} from "./Style";

function Settings(props) {
  const { handleTabState, tabState, error, hanldeSubmit } = props;
  return (
    <SettingsWrapper>
      Settings
      <InputWrapper>
        <Label>New Password: </Label>
        <Input
          placeholder="FirstName"
          type="text"
          onChange={(e) => handleTabState("settings", e, "newPassword")}
          value={tabState?.settings?.newPassword}
        />
        <Error>{error?.settings?.newPassword}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>Confirm Password: </Label>
        <Input
          placeholder="FirstName"
          type="text"
          onChange={(e) => handleTabState("settings", e, "confirmPassword")}
          value={tabState?.settings?.confirmPassword}
        />
        <Error>{error?.settings?.confirmPassword}</Error>
      </InputWrapper>
      <SubmitButton onClick={() => hanldeSubmit()}>Button</SubmitButton>
    </SettingsWrapper>
  );
}

export default Settings;
