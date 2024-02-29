import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body(props) {
  const [filteredResObj, setFilteredResObj] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [buttonText, setButtonText] = useState("top Rated Restaurants");
  const [searchText, setSearchText] = useState("");

  const handleToggle = () => {
    if (buttonText === "top Rated Restaurants") {
      setButtonText("All Restaurants");
      setFilteredResObj(resObj.filter((e) => e.info.avgRating > 4.5));
    } else {
      setButtonText("top Rated Restaurants");
      setFilteredResObj(filteredRestaurant);
    }
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D26.87560%26lng%3D80.91150%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      setFilteredRestaurant(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredResObj(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              placeholder="Enter Your favourite Restaurant Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                const filteredRestaurant = filteredResObj.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredResObj(filteredRestaurant);
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
        {filteredResObj.map((e) => (
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
