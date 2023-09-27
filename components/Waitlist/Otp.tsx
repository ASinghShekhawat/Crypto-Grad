import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPfield({ setOtp, otp }) {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span className="ml-1 mr-1"></span>}
      renderInput={(props) => <input {...props} />}
      containerStyle={{
        margin: "20px 0px",
      }}
      inputStyle={{
        background: "transparent",
        color: "white",
        fontSize: "16px",
        borderColor: "white",
        borderRadius: "5px",
        borderWidth: "1px",
        outline: "none",
        width: "40px",
        height: "45px",
      }}
    />
  );
}
