import React from "react";

export default function Companies() {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        <img
          src="microsoft_logo.png"
          alt="Microsoft"
          className="w-20 md:w-28"
        />
        <img
          src="walmart_logo.png"
          alt="Walmart"
          className="w-20 md:w-28"
        />
        <img
          src="accenture_logo.png"
          alt="Accenture"
          className="w-20 md:w-28"
        />
        <img
          src="adobe_logo.png"
          alt="Adobe"
          className="w-20 md:w-28"
        />
        <img
          src="paypal_logo.png"
          alt="Paypal"
          className="w-20 md:w-28"
        />
      </div>
    </div>
  );
}
