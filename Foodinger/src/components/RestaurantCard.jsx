import {CDN_SRC}  from "../Utils/constants";

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;
  
  return (
    <div>
      <div className="res-card">
        <img
          src={  CDN_SRC + resData.cloudinaryImageId }
          alt=""
        />
        <h3>{resData.name}</h3>
        <h5>
          {resData.avgRating}⭐{resData.locality}
        </h5>
        <h5>{resData.cuisines.join(" ,")}</h5>
        <h4>{resData.costForTwo}</h4>
        <button className="btn1">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
