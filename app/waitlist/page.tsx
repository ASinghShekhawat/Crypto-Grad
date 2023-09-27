'use client'

import React, { useState } from 'react'
import Page from '@/components/shared/Page'
import { X } from 'react-feather'
import VerifiedPage from '@/components/Waitlist/VerifiedPage'
import OTPfield from '@/components/Waitlist/Otp'
import Button from '@/components/shared/Button'
import EmailInput from '@/components/Waitlist/EmailInput'
import Countdown, { CountdownRenderProps } from 'react-countdown'

const WaitlistPage = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [showOTPForm, setShowOTPForm] = useState(false)
  const [otpErr, setOtpErr] = useState(false)
  const [err, setErr] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [k, setK] = useState(0)

  const handleVerifyOTP = () => {
    setOtpVerified(true)
  }

  const handleResendOTP = () => {
    setK((i) => i + 1)
    // setResendTimer(Date.now() + 60000)
  }

  const handleRequestOTP = () => {
    setShowOTPForm(true)
  }

  const renderer = ({ seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <span
          className="mt-2 cursor-pointer text-themeTextGrey underline"
          onClick={handleResendOTP}
        >
          Resend now
        </span>
      )
    } else {
      return (
        <span className="mt-2 text-sm text-themeTextGrey">
          Resend OTP in {seconds} seconds
        </span>
      )
    }
  }

  if (otpVerified) {
    return <VerifiedPage />
  }

  return (
    <Page className="flex items-start justify-center md:items-center ">
      <div className="relative w-fit">
        <button className="absolute right-0 top-0 -mr-0 -mt-12 hidden rounded-full bg-themeBgBlack px-2 py-2 text-white md:block">
          <X size={20} />
        </button>
        <div className="flex flex-col gap-4 rounded-3xl p-0 md:w-[400px] md:bg-themeBlack md:p-8">
          <h1 className="text-3xl font-semibold text-white">
            {showOTPForm ? 'Enter 6-digit OTP' : 'Check Your Rank'}
          </h1>
          {showOTPForm ? (
            <span className="text-sm font-light text-white opacity-90">
              Your Code Was Sent To {email}
            </span>
          ) : (
            <span className="visible text-sm font-light text-white opacity-90 md:hidden">
              Discover Where You Stand Among The Top Performers On Our
              Leaderboard Page. Check Your Rank And Celebrate Your Achievements!
            </span>
          )}
          {showOTPForm ? (
            <OTPfield err={otpErr} setOtp={setOtp} otp={otp} />
          ) : (
            <EmailInput err={err} value={email} setValue={setEmail} />
          )}

          {showOTPForm ? (
            <>
              <Countdown
                key={k}
                renderer={renderer}
                date={Date.now() + 60000}
              />
              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length < 6}
                className="md:w-fit"
              >
                Verify OTP
              </Button>
            </>
          ) : (
            <Button
              onClick={handleRequestOTP}
              disabled={email.length === 0}
              className="md:w-fit"
            >
              Request OTP
            </Button>
          )}
        </div>
      </div>
    </Page>
  )
}

export default WaitlistPage
