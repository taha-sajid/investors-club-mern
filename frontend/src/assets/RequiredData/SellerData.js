import React from "react";

import {
  EyeSVG,
  PersonSVG,
  ServiceSVG,
  EnvelopSVG,
  DoubleCheckSVG,
} from "./Svgs";

const data = [
  {
    title: "Lower fees, better service",
    icon: <ServiceSVG />,
    description:
      "Enjoy world-class service, free valuation, AND the lowest fees of any broker, guaranteed.",
  },
  {
    title: "Get a fair valuation",
    icon: <EyeSVG />,
    description:
      "We create a full due-diligence report that proves your site's value; you're never pressured into a sale.",
  },
  {
    title: "Close the deal quickly",
    icon: <DoubleCheckSVG />,
    description:
      "No months-long wait: you'll be live in 7 days or less. Sales are verified and closed in 7 days or less, too.",
  },
  {
    title: "Sell with confidence",
    icon: <EnvelopSVG />,
    description:
      "Our team mediates every deal to take work off your plate and eliminate risk. Beginner-friendly!",
  },
  {
    title: "Simplify communication",
    icon: <PersonSVG />,
    description:
      "Buyers contact you directly from in the app: no exploding inboxes or tedious phone tag.",
  },
];
export default data;
