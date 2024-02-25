import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState } from "react";


function Body() {
  // scope of state variable is only in this component
  const [filteredResObj, setFilteredResObj] = useState(resObj);
  const [z, setz] = useState(filteredResObj);

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
        onClick={() => {
          const filteredResObj = resObj.filter((e) => e.avgRating > 4.5);
          setFilteredResObj(filteredResObj);
        }}
        onDoubleClick={() => {
          setFilteredResObj(resObj);
        }}
      >
        Top Rated Restaurants
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
