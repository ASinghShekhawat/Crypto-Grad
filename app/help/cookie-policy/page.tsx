const CookiePolicy = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center gap-12 px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold md:text-5xl">
          Cookie Policy
        </h1>
        <div className="text-center text-xs text-themeLightGrey">
          Last Update: 15th December, 2023
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Introduction</h2>
        <p>
          This Cookie Policy explains what cookies are, how we use them, and
          your options regarding their use. Please read this policy carefully as
          it provides essential information about how we use cookies on our
          website.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work or to improve their performance, as well as to provide
          information to the website owners. Cookies can be temporary (session
          cookies) or permanent (persistent cookies). Session cookies are
          deleted when you close your browser, while persistent cookies remain
          on your device until they expire or you delete them.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-3xl font-medium md:text-4xl">
            How Do We Use Cookies?
          </h2>
          <p>We use cookies for various purposes, including:</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly.
            They enable you to navigate around the website and use its features,
            such as accessing secure areas of the site.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use our
            website, such as which pages they visit most often and if they
            receive error messages from web pages. This information helps us to
            improve the performance and functionality of the website
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such
            as your user name or language) and provide enhanced, more personal
            features.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">4. Advertising Cookies</h3>
          <p>
            These cookies are used to deliver advertisements that are relevant
            to your interests. They are also used to limit the number of times
            you see an advertisement, as well as to help measure the
            effectiveness of advertising campaigns.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">5. Social Media Cookies</h3>
          <p>
            These cookies allow you to share content from our website on social
            media platforms, such as Facebook, Twitter, and LinkedIn.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-3xl font-medium md:text-4xl">
            Third-party Cookies
          </h2>
          <p>
            We use third-party cookies on our website for various purposes,
            including:
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">1. Analytics</h3>
          <p>
            We use analytics services to collect information about how visitors
            use our website. These services may use cookies to collect this
            information on our behalf.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">2. Advertising</h3>
          <p>
            We may use advertising networks to display advertisements on our
            website. These networks may use cookies to track your activity
            across different websites to provide you with relevant
            advertisements.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-2xl">3. Social Media</h3>
          <p>
            We may use social media platforms to promote our services and share
            content. These platforms may use cookies to collect information
            about your activity on our website.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Your Options</h2>
        <p>
          Most web browsers allow you to control cookies through their settings.
          However, disabling cookies may affect your ability to use certain
          features of the website.You can also opt-out of certain types of
          cookies by visiting the following websites:
        </p>
        <p>
          Google Analytics:{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>
        <p>
          Facebook:{' '}
          <a
            href="https://www.facebook.com/help/568137493302217"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://www.facebook.com/help/568137493302217
          </a>
        </p>
        <p>
          Twitter:{' '}
          <a
            href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads
          </a>
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">
          Changes to this Policy
        </h2>
        <p>
          We may update this Policy from time to time by posting a new version
          on our Site. The effective date of the current version will be noted
          at the top of this Policy.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-3xl font-medium md:text-4xl">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Policy, please
          contact us at{' '}
          <a href="mailto:compliance@bitgenix.io" className="underline">
            compliance@bitgenix.io
          </a>
        </p>
      </div>
    </div>
  )
}

export default CookiePolicy
