import React from "react";
import { CDN_SRC } from "../Utils/constants";
import './Body.css';

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;

  return (
    <div>
      <div className="res-card">
        <img src={CDN_SRC + resData.info.cloudinaryImageId} alt="" />
        <h3>{resData.info.name}</h3>
        <h5>
          {resData.info.avgRating}⭐{resData.locality}
        </h5>
        <h5>{resData.info.cuisines.join(" ,")}</h5>
        <h4>{resData.info.costForTwo}</h4>
        <button className="btn-1 ">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
