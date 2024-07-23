import React, { useState } from "react";
import "./style.css";

function OTPField({ length = 4 }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      document.getElementById(`otp${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp${index - 1}`).focus();
    }
  };

  const handlePaste = (e, index) => {
    const pasteData = e.clipboardData.getData("text");
    if (/[^0-9]/.test(pasteData)) return;
    const pasteArray = pasteData.split("").slice(0, length - index);
    const newOtp = [...otp];
    for (let i = 0; i < pasteArray.length; i++) {
      newOtp[index + i] = pasteArray[i];
    }
    setOtp(newOtp);
    e.preventDefault();
    document.getElementById(`otp${length - 1}`).focus();
  };

  return (
    <div>
      <h1>OTP Field</h1>
      <div className="otp-wrapper">
        {otp.map((_, index) => {
          return (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-input"
              id={`otp${index}`}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              onPaste={(e) => handlePaste(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OTPField;
