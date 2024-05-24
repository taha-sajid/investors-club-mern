import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";

import "./SingleProductPage.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const SingleProductPage = () => {
  const { singleProduct } = useSelector((state) => state.listing);
  const {
    askingPrice,
    businessName,
    domainRegistrationYear,
    monetizationMethods,
    businessType,
    image,
    url,
    revenue1,
    revenue2,
    revenue3,
  } = singleProduct;

  const averageRevenue = calculateAverage(revenue1, revenue2, revenue3);

  function calculateAverage(num1, num2, num3) {
    const average = (+num1 + +num2 + +num3) / 3;
    return Math.round(average);
  }
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="single-product-page-section">
        <div className="single-product-page-container">
          <div className="single-product-page">
            <div className="single-product-container">
              <div className="product-heading">
                <h1 className="product-title">{businessName}</h1>
                <div className="product-subtitle">
                  <p className="product-url">URL: {url}</p>
                  <div className="product-category">{businessType}</div>
                </div>
              </div>
              <div className="product-body">
                <div className="product-image">
                  <img src={`http://localhost:5000/uploads/${image}`} alt="" />
                  {/* const imageUrl = http://yourdomain.com/uploads/${filename}; */}
                </div>
                <div className="product-details">
                  <div className="product-details-header">
                    <div className="product-price">
                      <h1>${askingPrice}</h1>
                      <p className="caption">Asking price</p>
                    </div>
                    <div className="product-revenue">
                      <h1>${averageRevenue}</h1>
                      <p className="caption">Avg. monthly net revenue</p>
                    </div>
                  </div>
                  <div className="product-details-footer">
                    <div className="product-details-wrapper">
                      <div className="general-info">
                        {monetizationMethods.map((monetizationMethod) => {
                          return <p>{monetizationMethod}</p>;
                        })}
                      </div>
                      <div className="general-info">
                        <p>Domain registration</p>
                        <p>{domainRegistrationYear}</p>
                      </div>
                      <div className="general-info">
                        <p>Multiple</p>
                        <p>46x</p>
                      </div>
                    </div>
                    <div className="product-details-wrapper">
                      <div className="general-info">
                        <p>Business Type</p>
                        <p>Content site</p>
                      </div>
                      <div className="general-info">
                        <p>Listing published</p>
                        <p>2023-09-18</p>
                      </div>
                      <div className="general-info">
                        <p>Listing updated</p>
                        <p>2024-02-03</p>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="btn-lg btn-primary">Buy know</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
