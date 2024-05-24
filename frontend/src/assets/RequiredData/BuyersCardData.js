import { CupSVG, StarSVG, CheckSVG, WalletSVG } from "./Svgs";
import React from "react";

const data = [
  {
    icon: <WalletSVG />,
    title: "Invest with confidence",
    description:
      "Unlock expert analysis on traffic, profitability, backlinks, and 24+ factors for every listing.",
    button: "Sample Report",
  },
  {
    icon: <StarSVG />,
    title: "Skip the heavy lifting",
    description:
      "We draft your legal docs, manage transfer, conduct site inspections, and offer no-fee escrow",
  },
  {
    icon: <CheckSVG />,
    title: "Ditch the competition",
    description:
      "Listings are exclusive and private: no competing with thousands of public buyers.",
  },
  {
    icon: <CupSVG />,
    title: "Speed up the sale",
    description: "Quickly contact sellers and negotiate directly in the app.",
  },
];

export default data;
