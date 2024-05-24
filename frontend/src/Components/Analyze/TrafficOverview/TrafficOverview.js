import React from "react";
import "./TrafficOverview.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Index = () => {
  const chartContainerRef = React.createRef();
  console.log(chartContainerRef);

  // let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, "rgba(58,123,213,1");
  // gradient.addColorStop(1, "rgba(0,210,255,0.3");

  const labels = [
    "Dec 19",
    "Jan 20",
    "Feb 20",
    "Mar 20",
    "Apr 20",
    "May 20",
    "Jun 20",
    "Jul 20",
    "Aug 20",
    "Sep 20",
    "Oct 20",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          10000,
          90000,
          120000,
          270000,
          220000,
          270000,
          250000,
          300000,
          270000,
          350000,
          500000,
        ],
        label: "Website details",
        fill: true,
        borderColor: "#4a1172",
        hoverBorderWidth: 7,
        pointBorderWidth: 5,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
    },
  };
  return (
    <div className="traffic-overview-section">
      <div className="traffic-overview-heading">
        <h2>Traffic overview</h2>
      </div>
      <div className="note">
        <p>
          <p>
            The traffic data below is pulled directly from the seller's Google
            Analytics account via API. It's updated weekly and everything is
            100% verified.
          </p>
        </p>
      </div>
      <div className="graph-container">
        <div className="graph-buttons">
          <div className="graph-button-wrapper">
            <div className="graph-button">
              <h4>View data as</h4>
              <button className="btn-primary-light btn-active">graph</button>
              <button className="btn-primary-light">table</button>
            </div>
            <div className="graph-button">
              <h4>Group data by</h4>

              <button className="btn-primary-light">weeks</button>
              <button className="btn-primary-light btn-active">months</button>
            </div>
          </div>
          <div className="graph-input-data">
            <select id="cars" name="carlist" form="carform">
              <option value="TotalPageViews">Total pageviews</option>
              <option value="UniquePageViews">Unique pageviews </option>
              <option value="TotalUsers">Total users</option>
              <option value="NewUsers">New users</option>
              <option disabled value="sochengay">
                Top pages (premium only)
              </option>
              <option value="TopChannels">Top channels</option>
              <option disabled value="Sochengay">
                Organic landing page (Premium only)
              </option>
              <option value="TopCountries">Top countries</option>
              <option value="Devices">Devices</option>
            </select>
          </div>
        </div>

        <div className="graph">
          <Line ref={chartContainerRef} data={data} options={config} />
        </div>

        <div className="graph-comparison-dates">
          <div className="container">
            <input type="checkbox" checked={true && "checked"} />
            <span className="checkmark"></span>
          </div>
          <p> Show Comparison Dates</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
