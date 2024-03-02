import { RESTAURANT_API } from "../Utils/constants";
import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
   
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      const res = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      console.log(res);
      setOriginalData(res);
      setFilteredRestaurant(res);
   
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return { originalData, filteredRestaurant, setFilteredRestaurant};
};

export default useRestaurant;
