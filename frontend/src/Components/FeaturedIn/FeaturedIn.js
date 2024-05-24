import React from "react";
import "./FeaturedIn.css";
import {
  WebsiteFlip,
  NichePurus,
  P,
  IndieHackers,
  SideHustle,
  MonetizePros,
  FlippingWebsites,
  DealsFlow,
} from "../../assets/RequiredData/Svgs";
const index = () => {
  return (
    <div className="featured-in-container">
      <div className="heading">
        <h4>As Featured in</h4>
        <div className="companies">
          <i>
            <WebsiteFlip className="icon" />
          </i>

          <i>
            <NichePurus className="icon" />
          </i>
          <i>
            <P />
          </i>
          <i>
            <IndieHackers className="icon" />
          </i>
          <i>
            <SideHustle className="icon" />
          </i>
          <i>
            <MonetizePros className="icon" />
          </i>
          <i>
            <FlippingWebsites className="icon" />
          </i>
          <i>
            <DealsFlow className="icon" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default index;
