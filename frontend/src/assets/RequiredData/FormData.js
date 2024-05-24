import { BsCheck2 } from "react-icons/bs";
import React from "react";
import { BagSVG, CalendarSVG, TargetSVG } from "./Svgs";

// COMMON FORM DATA
export const register = {
  heading: `Let's get things rolling...`,
  stepsIndicator: [1, 2, 3],
  stepName: `STEP 1: CREATE AN ACCOUNT`,
  stepDescription: `To apply, we’ll need a few basic contact details and a quick understanding of your financial position. Your information will never be shared or used for commercial purposes.`,
  button: ["Next step"],
};

// BUYER FORM DATA
export const additionalInfo = {
  heading: `Help us adjust your Investors Club experience`,
  stepsIndicator: [<BsCheck2 />, 2, 3],
  stepName: `STEP 2: SET YOUR PREFERENCES`,
  stepDescription: `In order to help us provide you with better deals and craft your Investors Club experience to your needs, let us know what you'd like the best.`,
  ques1: `What size of deal do you prefer to invest in?`,
  ques1Options: [
    "Under $100,000",
    "$100,000-$300,000",
    "$300,000-$600,000",
    "$600,000+",
  ],
  ques2: `What monetization methods are you most comfortable with?`,
  ques2Options: [
    "Display advertising",
    "Direct advertising",
    "Affiliate marketing",
    "Lead generation",
    "Info product",
    "e-Commerce",
    "Digital product",
    "Subscription",
    "SaaS",
    "Other",
  ],
  registerReferal: `How did you hear about us?`,
  sublbl: `We'd like to know how did you end up here?`,
  button: ["Next"],
};

export const financialInfo = {
  heading: `Now, let's get you approved`,
  stepsIndicator: [<BsCheck2 />, <BsCheck2 />, 3],
  stepName: `STEP 3: PROVIDE PROOF OF FUNDS`,
  stepDescription: `We'd like to verify your ability to participate in our marketplace. This protects our sellers and ensures we can continue to attract high-yield deals. Sharing is required in order to be approved.`,
  button: ["Skip this step", "Save and finish"],
};

export const applicationCompleted = {
  heading: `Thanks — we're reviewing your application!`,
  stepsIndicator: [<BsCheck2 />, <BsCheck2 />, <BsCheck2 />, 4],
  stepName: `STEP 4: VERIFY YOUR ACCOUNT`,
  stepDescription: `Your application will be reviewed within 24 hours. Once approved, we’ll contact you via email with details to activate your account and start your subscription.`,
  headerButton: ["Update financial info", "Browse listings"],
  support: "Having issues? Please contact support@investors.club",
};

// SELLER FORM DATA

export const businessInfo = {
  heading: "Seller Submission Form",
  description:
    "Currently, we are accepting content websites and e-commerce businesses to be sold on our marketplace. What business model is your business in?",
  button: ["Content Site", "E-Commerce Site"],
};

export const monitizationInfo = {
  heading: "Monetization info",
  stepsIndicator: [1, 2, 3],
  stepName:
    "Please make sure your site matches the criteria below before you proceed:",
  criteria: [
    { icon: <TargetSVG />, description: "Targets English-speaking market" },
    {
      icon: <BagSVG />,
      description: "Makes at least $500 per month in profit",
    },
    { icon: <CalendarSVG />, description: "Is at least 12 months old" },
  ],
  button: [
    "Affiliate marketing",
    "Direct advertising",
    "Lead generation",
    "Donations",
    "Info product",
    "Other",
  ],
};

export const aboutBusiness = {
  heading: "About the business",
  stepsIndicator: [<BsCheck2 />, 2, 3],
  stepName:
    "Please enter your URL and describe your business in a few sentences.",
  button: [
    "Yes, I'm the owner",
    "No, I'm brokering this deal",
    "I started it from scratch",
    "I bought it",
  ],
};

export const financialAnalytics = {
  heading: "Financial & Analytics",
  stepsIndicator: [<BsCheck2 />, <BsCheck2 />, 3],
  stepDescription:
    "In order to asses the current status of your business, we'll need you to share some basic revenue numbers.",
};

export const aboutService = {
  heading: "Service overview",
  stepsIndicator: [1, 2, 3],
  stepName: "STEP 1: CREATE AN ACCOUNT",
  stepDescription:
    "To get started with Investors Club, we'll need some basic service details and a brief overview of your services.",
};
