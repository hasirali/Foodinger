import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState, useEffect } from "react";

function Body() {
  const [filteredResObj, setFilteredResObj] = useState(resObj);
  const [buttonText, setButtonText] = useState("top Rated Restaurants");

  const handleToggle = () => {
    if (buttonText === "top Rated Restaurants") {
      setButtonText("All Restaurants");
      const filteredResObj = resObj.filter((e) => e.avgRating > 4.5);
      setFilteredResObj(filteredResObj);
    } else {
      setButtonText("top Rated Restaurants");
      setFilteredResObj(resObj);
    }
  };

  const [z, setz] = useState(filteredResObj);
  // scope of state variable is only in this component
  // array destructuring⬆️
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4272113&lng=81.805925&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setFilteredResObj(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);

  



  return (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>

      <button
        className="filtered-btn"
        onClick={handleToggle}

        // onClick={() => {
        //   const filteredResObj = resObj.filter((e) => e.avgRating > 4.5);
        //   setFilteredResObj(filteredResObj);
        // }}
        // onDoubleClick={() => {
        //   setFilteredResObj(resObj);
        // }}
      >
        {buttonText}
        {/* Top Rated Restaurants */}
      </button>

      <div className="res-container">
        {/* <RestaurantCard resData={resObj[3]} /> */}
        {/* use map reduce */}
        {filteredResObj.map((e) => {
          return <RestaurantCard key={e.id} resData={e} />;
        })}
      </div>
    </>
  );
}

export default Body;
