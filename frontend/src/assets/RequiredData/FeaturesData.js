import React from 'react';

import {
  FullInspectionSVG,
  LegalDocSVG,
  NofeeSVG,
  SiteTransferSVG,
  SOPSVG,
  SupportSVG,
} from "./Svgs";

const data = [
  {
    heading: "Legal Docs",
    icon: <LegalDocSVG />,
    description:
      "We'll draft and manage contracts and legal docs on your behalf.",
  },

  {
    heading: "No-Fee Escrow",
    icon: <NofeeSVG />,
    description: "Get paid quickly without the costs, restrictions, or risks.",
  },
  {
    heading: "Site Transfer",
    icon: <SiteTransferSVG />,
    description:
      "We handle technical transfer so that nothing breaks or gets missed.",
  },
  {
    heading: "Full Inspection",
    icon: <FullInspectionSVG />,
    description:
      "We ruthlessly inspect sites post-sale to protect your investment.",
  },
  {
    heading: "SOPs & APAs",
    icon: <SOPSVG />,
    description: "Save hours and headaches with proven docs at your disposal.",
  },
  {
    heading: "1:1 Support",
    icon: <SupportSVG />,
    description: "Phone or email for hands-on help with any issue.",
  },
];

export default data;
