import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LatestEdition from "../../Components/LatestEdition/LatestEdition";
import "./Listings.css";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import Spinner from "react-bootstrap/Spinner";

const Listings = () => {
  const [listingsData, setListingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/getallistings`)
      .then((resp) => resp.json())
      .then((listing) => {
        setListingsData([...listing.data]);
        setLoading(false);
        console.log(listingsData);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array ensures this runs only once on mount
  const handleListingData = () => {
    listingsData.map((listings) => {
      console.log(listings);
    });
  };
  useEffect(() => {
    // This will log the updated listingsData after each render
    console.log("Updated listingsData:", listingsData);
    handleListingData();
    listingsData.map((listing) => {
      const { askingPrice } = listing;
      console.log(listing, askingPrice);
    });
  }, [listingsData]);
  return (
    <>
      <Navbar />
      {loading ? (
        <Spinner animation="border">This is currently loading</Spinner>
      ) : (
        <main className="listing-page-container dashboard-container">
          {/* <h1> This is listings Page </h1> */}
          {/* <LatestEdition cardData={cardData} />
        <LatestEdition cardData={cardData} /> */}
          <div className="my-listings">
            {listingsData != [] &&
              listingsData.map((listing) => {
                const { id } = listing;
                return <LatestEdition listing={listing} key={id} />;
              })}
          </div>
        </main>
      )}
    </>
  );
};

export default Listings;
