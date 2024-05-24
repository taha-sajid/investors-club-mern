import React from 'react';
import { SuccessSVG, AllertSVG } from "./Svgs";

const domainStrengthData = [
  {
    heading: "DOMAIN RATING",
    totalValue: 100,
    value: 5,
  },
  {
    heading: "DOMAIN AUTHORITY",
    totalValue: 100,
    value: 9,
  },
  {
    heading: "TRUST FLOW",
    totalValue: 100,
    value: 1,
  },
  {
    heading: "CITATION FLOW",
    totalValue: 100,
    value: 1,
  },
  {
    heading: "LINKING ROOT DOMAINS",
    totalValue: 109,
  },
  {
    heading: "INDEXED PAGES",
    totalValue: 26600,
  },
];

const spamSignalsData = [
  {
    text: "Has there ever been any acknowledged or suspected Google penalties on the site, either algorithmic traffic reductions or through manual action?",
    icon: <SuccessSVG />,
  },
  {
    text: "Do we believe the site has previously used or is currently using PBN links?",
    icon: <SuccessSVG />,
  },
  {
    text: "Do we believe the site has previously used or is currently using link insertions (niche edits)?",
    icon: <AllertSVG />,
  },
  {
    text: "Do we believe the site has ever used any other known link building techniques that are generally considered to be risky?",
    icon: <AllertSVG />,
  },

  {
    text: "Do we believe the site was built on an expired or repurposed domain?",
    icon: <AllertSVG />,
  },
  {
    text: "Do we believe the site currently has other domains redirected to it?",
    icon: <SuccessSVG />,
  },
  {
    text: "Do we believe there are currently any rental links in any capacity that a new owner would likely have to continue renting to avoid a reduction in traffic?",
    icon: <SuccessSVG />,
  },
];
export { domainStrengthData, spamSignalsData };
