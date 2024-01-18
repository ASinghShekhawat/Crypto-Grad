const TermsAndConditions = () => {
  return (
    <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-12 px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold md:text-5xl">
          Terms & Conditions
        </h1>
        <div className="text-center text-xs text-themeLightGrey">
          Last Update: 26th December, 2023
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Welcome to CryptoGrad, operated by Cryptograd (referred to as
          &quot;CryptoGrad,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing and using our services, you agree to
          comply with and be bound by the following Terms & Conditions. If you
          do not agree to these terms, please refrain from using our services.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Acceptance of Terms</h3>
          <p>
            We collect information you provide, including but not limited to
            your name, email address, contact number, mailing address, and any
            other data you willingly share with us during interactions with our
            platform.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. User Eligibility</h3>
          <p>
            You must be at least 18 years old to use CryptoGrad&apos;s services.
            By using our services, you represent and warrant that you are at
            least 18 years old and have the legal capacity to enter into these
            Terms & Conditions.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. User Accounts</h3>
          <p>
            You may be required to create an account with CryptoGrad. You are
            responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account.
            Ensure that the information provided is accurate, complete, and
            up-to-date. If you become aware of any unauthorized use of your
            account, notify us immediately.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">4. Educational Content</h3>
          <p>
            The educational content provided by CryptoGrad is for informational
            and educational purposes only. It does not constitute financial
            advice or trading recommendations. Users are encouraged to conduct
            their own research and seek professional advice before making any
            financial decisions.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">5. Trading Calls</h3>
          <p>
            CryptoGrad may provide trading calls and insights through its
            Discord channels. It is crucial to note that these calls are for
            educational purposes and do not guarantee profits. Users are
            encouraged to conduct their own research and consult with financial
            professionals before making any trading decisions.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">6. User Conduct</h3>
          <p>
            While using CryptoGrad&apos;s services, you agree not to engage in
            any prohibited conduct, including but not limited to:
          </p>
          <ul className="flex list-inside flex-col gap-4">
            <li>- Violating any applicable laws or regulations.</li>
            <li>- Infringing on the rights of others.</li>
            <li>- Transmitting spam or unwanted communications.</li>
            <li>
              - Attempting to interfere with the proper functioning of our
              services.
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">7. Limitation of Liability</h3>
          <p>
            CryptoGrad is not liable for any direct, indirect, incidental,
            consequential, or punitive damages arising out of your use of our
            services. We do not guarantee the accuracy or completeness of the
            information provided on our platform.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">8. Modification of Terms</h3>
          <p>
            CryptoGrad reserves the right to terminate or suspend services to
            any user without prior notice, at our discretion. This may result
            from a breach of Terms & Conditions, violation of community
            guidelines, or any other reasons deemed appropriate.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">9. Governing Law</h3>
          <p>
            These Terms & Conditions are governed by and construed in accordance
            with applicable laws. Any disputes arising from these terms will be
            subject to the exclusive jurisdiction of the appropriate courts.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">10. Contact Information</h3>
          <p>
            For any inquiries or concerns regarding these Terms & Conditions,
            please contact us at{' '}
            <a href="mailto:info@cryptograd.ai">info@cryptograd.ai</a>.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-3xl font-medium md:text-4xl">Other Terms</h2>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Community Guidelines:</h3>
          <p>
            Users must adhere to the community guidelines outlined in the
            Discord channels. Any violation of these guidelines may result in
            moderation actions, including warnings, temporary suspension, or
            permanent banning from the community.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. Financial Risks</h3>
          <p>
            Trading cryptocurrencies involves inherent risks. CryptoGrad is not
            responsible for any financial losses incurred by users. Users are
            advised to trade responsibly and only invest what they can afford to
            lose.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. No Financial Advice</h3>
          <p>
            CryptoGrad does not provide financial advice or personalized
            investment recommendations. Users should consult with a qualified
            financial advisor before making any investment decisions.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">4. Content Accuracy</h3>
          <p>
            While we strive to provide accurate and up-to-date information,
            CryptoGrad does not guarantee the accuracy or completeness of the
            content. Users should verify information independently before
            relying on it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
