import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu(); //callbac function
  }, []); //dependancy array

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&");



      const json = await data.json();
      // console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (resInfo === null) return <Shimmer />;

  // ? use graphQL this structre become easy
  //  const info = resInfo?.cards[0]?.card?.card?.info || {};
  //  const { name, costForTwo, cuisines, avgRating, locality, areaName } = info;
  const { name, costForTwo, cuisines, avgRating, locality, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  // const info1 =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  // const { itemCards } = info1;
  const itemCardz =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(itemCardz);

  return (
    <div className="menu">
      <h1>{name || "not available"}</h1>
      <h3>{costForTwo || "not available"}</h3>
      <p>{cuisines || "not available"}</p>
      <h3>{avgRating || "not available"}</h3>
      <h3>{locality || "not available"}</h3>
      <h3>{areaName || "not available"}</h3>
      {/* itemCardz[0]?.card?.info?.name */}
      <h1>Menu</h1>
      <ul>
        {itemCardz?.map((item) => (
          <li key={item?.card?.info?.id}>
            ----
            {item?.card?.info?.name} ------
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
            Rs
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
