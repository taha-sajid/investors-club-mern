import { CheckStarSVG, EyeSVG2, CommunicationSVG } from "./Svgs";
import React from "react";

const data = [
  {
    icon: <CheckStarSVG />,
    heading: "Private Deal Flow",
    description:
      "In exchange for no fees, sellers sign exclusivity agreements guaranteeing they will not list anywhere else.",
    note: `You'll have a new source of deals unavailable to the general public.`,
  },
  {
    icon: <EyeSVG2 />,
    heading: "Better Due Diligence",
    description:
      "Our auditors spend 5+ hours analyzing 24+ factors (incl. SEO, revenue history, market trends, content quality, backlinks and more) to weed out bad investments.",
    note: `You're guaranteed a fair purchase price on a proven asset.`,
    button: "see sample report",
  },
  {
    icon: <CommunicationSVG />,
    heading: "Direct Communication",
    description:
      "Contact sellers in the app to ask questions or negotiate, and see what others asked in public Q&A.",
    note: `You'll close deals more quickly without playing e-mail tag.`,
  },
];
export default data;
