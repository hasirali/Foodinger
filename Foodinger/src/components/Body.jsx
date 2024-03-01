import React, { useState } from "react";
import "./Body.css";
import useRestaurant from "../Utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

function Body() {
  const [buttonText, setButtonText] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  const { filteredRestaurant, setFilteredRestaurant, originalData } = useRestaurant();

  const handleToggle = () => {
    console.log("Before toggle:", filteredRestaurant);

    if (buttonText === "Top Rated Restaurants") {
      setButtonText("All Restaurants");
      let filtered = filteredRestaurant.filter((e) => e.info.avgRating > 4.5);
      setFilteredRestaurant(filtered);
      console.log("After toggle:", filtered);
      console.log("After toggle:", filteredRestaurant);
      console.log("After toggle:", originalData);


    } else {
      setButtonText("Top Rated Restaurants");
      setFilteredRestaurant(originalData);
    }

  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Restaurant Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                const filteredResult = originalData.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredResult);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button className="filtered-btn" onClick={handleToggle}>
          {buttonText}
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((e) => (
          <Link
            className="nav-link"
            key={e.info.id}
            to={"/restaurants/" + e.info.id}
          >
            <RestaurantCard resData={e} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
  