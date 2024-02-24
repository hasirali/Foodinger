import React from "react";
import "./Body.css";

const RestaurantCard = () => {
  return (
    <div>
      <div className="res-card">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jtuqk0cb3lfjldfav46t"
          alt=""
        />
        <h1>Meghna Foods</h1>
        <h5>4.1 30-34 mins</h5>
        <h5>Cakes and Pastry</h5>
        <h3>235$</h3>
      </div>
    </div>
  );
};

function Body() {
  return (
    <>
      <div className="body">
        <div className="search-container">
          <h1>Order Your Favourite Food</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your favourite Resaurant Name"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
   

        <div className="res-container">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
    </>
  );
}

export default Body;
