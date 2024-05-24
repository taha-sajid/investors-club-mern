import React from 'react';

import {
  CompetitiveSVG,
  GrowthSVG,
  NicheSVG,
  RiskSVG,
  WorkLoadSVG,
} from "./Svgs";

const data = [
  {
    heading: "Niche analysis",
    question: "Where is this niche heading, and what are the trends?",
    description: `This is an interesting niche, it can be find anywhere or by visiting the manufacturer websites. Having that in mind, there are hundreds of similar sites. 
    Having that in mind, this site is trying to help you with finding the actual content.
    As for the monetization method, some sites are even selling similar content. But it seems that most competitors are earning money by display ads.`,
    icon: <NicheSVG />,
  },
  {
    heading: "Competitive analysis",
    question: "Where does this business sit amongst the competitors?",
    description: `Most of the competitors are similar sites with thousands of pages of content. 
    As for common keywords, they are targeting low volume long-tail keywords. There are no “famous” tech or smartphone websites ranking for those terms.`,
    icon: <CompetitiveSVG />,
  },
  {
    heading: " Risk analysis",
    question: "Where is this niche heading, and what are the trends?",
    description: `There are several problems around this site. First, it has more than 25,000 pages. It is hard to take care of even a fraction of those pages. 
   Another problem is that there are only around 100 referring domains and even those referring domains are not particularly great. `,
    icon: <RiskSVG />,
  },
  {
    heading: "Growth analysis",
    question: "If we owned this site, here's what we would do to grow it.",
    description: `Some of the growth tips that we can suggest are: 
    - Finding alternative monetization methods like lead generation for smartphone repair shops
    - Adding affiliate links for smartphones/smartphone gear
    - Renting ad space on the website (it should be easy with the current traffic numbers)
    - Building an active email newsletter
    `,
    icon: <GrowthSVG />,
  },
  {
    heading: "Workload analysis",
    question:
      "What's required to run this business? Can this be a passive investment?",
    description: `In our opinion, the owner should hire VA to do a lot of manual tasks like writing the content and publishing it on the site. 
    The person behind it doesn’t have to be technically sound. If we measure it by hours per week, probably 10-15 hours per week for the VA and 5-10 hours per week for the owner for handling the email, doing the outreach, finding alternative monetization methods, etc.
    `,
    icon: <WorkLoadSVG />,
  },
];

export default data;
