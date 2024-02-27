import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [buttonText, setButtonText] = useState("top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  const handleToggle = () => {
    if (buttonText === "top Rated Restaurants") {
      setButtonText("All Restaurants");
      const filteredResObj = resObj.filter((e) => e.info.avgRating > 4.5);
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResObj(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering : rendering on the basis of condition
  // if(filteredResObj.length === 0){
  //   return <Shimmer/>
  // }

  return filteredResObj.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-container">
          <h1 className="headingf">Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                const filteredRestaurant = filteredResObj.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                
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
        {filteredRestaurant.map((e) => {
          return <RestaurantCard key={e.info.id} resData={e} />;
        })}
      </div>
    </>
  );
}

export default Body;
