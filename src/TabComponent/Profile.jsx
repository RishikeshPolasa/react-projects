import React from "react";
import { ProfileWrapper, InputWrapper, Input, Label, Error } from "./Style";

function Profile(props) {
  const { handleTabState, tabState, error } = props;
  return (
    <ProfileWrapper>
      Profile
      <InputWrapper>
        <Label>FirstName: </Label>
        <Input
          required
          placeholder="FirstName"
          type="text"
          onChange={(e) => handleTabState("profile", e, "firstName")}
          value={tabState?.profile?.firstName}
        />
        <Error>{error?.profile?.firstName}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>LastName: </Label>
        <Input
          placeholder="LastName"
          text="text"
          onChange={(e) => handleTabState("profile", e, "lastName")}
          value={tabState?.profile?.lastName}
        />
        <Error>{error?.profile?.lastName}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>Email: </Label>
        <Input
          placeholder="Email"
          text="email"
          onChange={(e) => handleTabState("profile", e, "email")}
          value={tabState?.profile?.email}
        />
        <Error>{error?.profile?.email}</Error>
      </InputWrapper>
    </ProfileWrapper>
  );
}

export default Profile;
