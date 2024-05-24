import React from 'react';

import { RoundCheckSVG, RoundCrossSVG } from "../../assets/RequiredData/Svgs";
const data = [
  {
    id: 1,
    data: "",
  },
  {
    id: 2,
    data: "Premium members",
    badge: 'most popular'
  },
  {
    id: 3,
    data: "Guest members",
  },
  {
    id: `1 bold`,
    data: "Price",
  },
  {
    id: 2,
    data: "$247/year",
  },
  {
    id: 3,
    data: "FREE",
  },
  {
    id: 1,
    data: "Business type",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Niche/Category",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Business summary",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Financial overview",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "E-commerce business metrics (AOV, CAC, ROAS, etc)",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "P&L Report Download",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Business/Site age",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Domain strength & metrics",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Monetization breakdown",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Valuation multiple (asking price)",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Tech stack",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Traffic report: users & pageviews",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Traffic source distribution",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Free mediation, transfer & inspection",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "No-fee escrow service",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "View URL & business name",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Page traffic distribution",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Seller background",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Niche/Sub-niche analysis",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Competitor analysis",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Risk analysis",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Spam signals report",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "SEO analysis",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Growth analysis",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Earnings potential",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Wayback history",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "10% discount on Deals Concierge",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "In-app messaging(contact the seller)",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Seller interviews",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "View or submit comments",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Access to private Discord community",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
  {
    id: 1,
    data: "Marketplace Analysis (E-commerce)",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCheckSVG />,
  },
  {
    id: 1,
    data: "Ecommerce Product Information (E-commerce)",
  },
  {
    id: 2,
    data: <RoundCheckSVG />,
  },
  {
    id: 3,
    data: <RoundCrossSVG />,
  },
];

export default data;
