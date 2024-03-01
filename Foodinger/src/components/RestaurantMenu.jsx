import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import {MENU_IMG } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // ? use graphQL this structre become easy
  
  const { name,cuisines,avgRatingString,locality,areaName,city,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;

  const itemCardz =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
?.itemCards;
  // console.log(itemCardz);

  return (
    <>
      <div className="hotel-info">
        <div className="hotel">
          <div className="MenuS1">
            <h1>{name}</h1>
            <div className="MenuS1-right">
              <h3>{avgRatingString}⭐ out of 5 Stars </h3>
              <img src={MENU_IMG + cloudinaryImageId} />
            </div>
          </div>
          <div className=" MenuS2">
            <span>Cusines: {cuisines.join(",")}</span>
            <p>
              {locality} , {areaName} , {city}
            </p>
          </div>
          {/* itemCardz[0]?.card?.info?.name */}
          <div className="menu">
            <h1>Menu</h1>
            <div className="items">
              <ul>
                {itemCardz?.map((item) => (
                  <li key={item?.card?.info?.id}>
                    <div className="img">
                      <img src={MENU_IMG + item?.card?.info?.imageId || item?.card?.info?.image} /> 
                    </div>
                    <div className="info">
                      <h1>{item?.card?.info?.name}</h1>
                      <h3>

                      {item?.card?.info?.description}
                      </h3>
                      <h2>
                        {item?.card?.info?.defaultPrice / 100 ||
                          item?.card?.info?.price / 100} Rs
                      </h2>
                      {/*<button className="btn1">Order Now</button> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
