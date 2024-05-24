import React, { useEffect } from "react";
import "./LatestEdition.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleProductData } from "../../ReduxToolkit/Features/Auth/listingSlice";

const LatestEdition = ({ listing }) => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.listing);

  const {
    businessType,
    image,
    askingPrice,
    monetizationMethods,
    revenue1,
    revenue2,
    revenue3,
  } = listing;
  const averageRevenue = calculateAverage(revenue1, revenue2, revenue3);

  function calculateAverage(num1, num2, num3) {
    const average = (+num1 + +num2 + +num3) / 3;
    return Math.round(average);
  }

  function handleCardClick(listing) {
    dispatch(updateSingleProductData(listing));
    console.log(listing);
  }

  useEffect(() => {
    console.log(singleProduct, "This is single product data");
  }, [singleProduct]);
  return (
    <>
      <div className="latest-addition-section">
        {/* <div className="heading">
          <h2>Our latest additions</h2>
          <p>
            New deals added constantly. Multiple industries, price points, and
            profit margins—but all vetted and proven money-makers.
          </p>
        </div> */}
        <div className="addition-cards-bunch">
          <div className="addition-cards">
            <p className="category">{businessType}</p>
            <Link to={"/listings/productpage"}>
              <div
                className="addition-card"
                style={{
                  background: ` linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url(http://localhost:5000/uploads/${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                }}
                onClick={() => {
                  handleCardClick(listing);
                }}
              >
                <div className="card-tag">
                  <p>{monetizationMethods}</p>
                </div>
                <div className="card-data">
                  <div className="price">${askingPrice}</div>
                  <div className="description">
                    Avg. monthly revenue: <span> ${averageRevenue} </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestEdition;
