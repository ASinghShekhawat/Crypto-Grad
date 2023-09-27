"use client";

import React, { useState, useEffect } from "react";
import Page from "@/components/shared/Page";
import { X } from "react-feather";
import VerifiedPage from "@/components/Waitlist/VerifiedPage";
import OTPfield from "@/components/Waitlist/Otp";
import Button from "@/components/shared/Button";
import EmailInput from "@/components/Waitlist/EmailInput";


const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {

    if (resendTimer > 0 && showOTPForm) {
      setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

  }, [resendTimer, showOTPForm]);

  const handleRequestOTP = () => {
    setShowOTPForm(true);
    setVerifyOTP(false);
    setResendTimer(60);
  };

  const handleVerifyOTP = () => {
    setVerifyOTP(true);
    setOtpVerified(true);
  };

  const handleResendOTP = () => {
    setResendTimer(60);
  };


  if (otpVerified) {
    return <VerifiedPage />;
  }

  return (
    <Page className="flex justify-center mmd:items-center items-start ">
      <div className="relative w-fit">
        <button className="bg-themeBgBlack text-white py-2 px-2 rounded-full absolute top-0 right-0 -mt-12 -mr-0 hidden mmd:block">
          <X size={20} />
        </button>
        <div className="mmd:bg-themeBlack mmd:p-14 p-0 rounded-3xl ">
          <h1 className="text-3xl text-white font-semibold mb-4 mt-4">
            {showOTPForm ? "Enter 6-digit OTP" : "Check Your Rank"}
          </h1>
          {showOTPForm ? (
            <span className="text-sm font-light text-white opacity-90">
              Your Code Was Sent To {email}
            </span>
          ) : (
            <span className="text-sm font-light text-white opacity-90 visible mmd:hidden">
              Discover Where You Stand Among The Top Performers On Our
              Leaderboard Page. Check Your Rank And Celebrate Your
              Achievements!
            </span>
          )}
          {showOTPForm ? (
            <OTPfield setOtp={setOtp} otp={otp} />
          ) : (
            <EmailInput value={email} setValue={setEmail} />
          )}

          {showOTPForm ? (
            <>
              <p className="text-themeTextGrey text-sm mt-2">
                Resend OTP in {resendTimer} seconds
                {resendTimer === 0 && (
                  <span
                    className="text-themeTextGrey cursor-pointer ml-2 underline"
                    onClick={handleResendOTP}
                  >
                    Resend now
                  </span>
                )}
              </p>

              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length === 0}
              >
                Verify OTP
              </Button>
            </>
          ) : (
            <Button
              onClick={handleRequestOTP}
              disabled={email.length === 0}
            >
              Request OTP
            </Button>
          )}
        </div>
      </div>
    </Page>
  );
};

export default WaitlistPage;
