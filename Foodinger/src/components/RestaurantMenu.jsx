import { useParams } from "react-router-dom";
// import RestaurantCategories from "./RestaurantCategories.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import Shimmer from "./Shimmer";

import "./RestaurantMenu.css";
import { MENU_IMG } from "../Utils/constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // ? use graphQL this structre become easy

  const {
    name,
    cuisines,
    avgRatingString,
    locality,
    areaName,
    city,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info || {}; 

  // const itemCardz =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(itemCardz);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
      return (
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(categories); 

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
            <span>Cusines: {cuisines?.join(",")}</span>
            <p>
              {locality} , {areaName} , {city}
            </p>
          </div>
          {/* itemCardz[0]?.card?.info?.name */}
          <div className="menu">
            <h1>Menu</h1>
            <div className="items">
              {categories.map((category) => (
                <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
