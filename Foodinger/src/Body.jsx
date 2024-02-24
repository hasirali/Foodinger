import React from "react";
import "./Body.css";

const RestaurantCard = (props) => {
  return (
    <div>
      <div className="res-card">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jtuqk0cb3lfjldfav46t"
          alt=""
        />
        <h1>{props.Rname}</h1>
        <h5>{props.time}</h5>
        <h5>{props.cusine}</h5>
        <h3>{props.price}</h3>
        <button className="btn1 btn">Order Now</button>
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
          <RestaurantCard Rname="Megna Foods" time="4.1 30-34 mins" cusine="Cakes and Pastry" price="235$" />
          <RestaurantCard Rname="KFC" time="4.4 30-34 mins" cusine="Cakes and Pastry" price="235$" />
          <RestaurantCard Rname="Al-Baik" time="4.1 30-34 mins" cusine="Cakes and Pastry" price="235$" />
          <RestaurantCard Rname="Kallu Kabab" time="4.1 30-34 mins" cusine="Cakes and Pastry" price="235$" />
        </div>
    </>
  );
}

export default Body;
