import React from "react";
import "./Body.css";

const RestaurantCard = (props) => {
  // yeh line mai batayenge ki jo resData humne pass kiya hai woh kya hai, wo ek prop hai jo humne pass kiya hai
  const { resData } = props;
  return (
    <div>
      <div className="res-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.cloudinaryImageId
          }
          alt=""
        />
        <h3>{resData.name}</h3>
        <h5>
          {resData.avgRating}⭐<h5> {resData.locality} </h5>
        </h5>
        <h5>{resData.cuisines.join(" ,")}</h5>
        <h4>{resData.costForTwo}</h4>
        <button className="btn1">Order Now</button>
      </div>
    </div>
  );
};

const resObj = [
  {
    id: "231204",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Hazratganj",
    areaName: "Hazratganj",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
  },

  {
    id: "330433",
    name: "McDonald's",
    cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
    locality: "Hazratganj",
    areaName: "Hazratganj",
    costForTwo: "₹400 for two",
    cuisines: ["American"],
    avgRating: 4.4,
    parentId: "630",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 39,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "405025",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Sahara Ganj Mall",
    areaName: "Hazratganj",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.3,
    parentId: "547",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
  },
  {
    id: "78862",
    name: "Domino's Pizza",
    cloudinaryImageId: "092e58460657922e098a8afd5db838fe",
    locality: "Khun Khunji Road",
    areaName: "Chowk",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.4,
    parentId: "2456",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
  },
  {
    id: "165050",
    name: "Mahalaxmi Sweets & Restaurant",
    cloudinaryImageId: "oqk0mierg0rlhuxoa3ok",
    locality: "Aliganj",
    areaName: "Aliganj",
    costForTwo: "₹300 for two",
    cuisines: [
      "Sweets",
      "Thalis",
      "North Indian",
      "South Indian",
      "Snacks",
      "Chinese",
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "262175",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
  },
  {
    id: "63930",
    name: "The Bon Bon Bakers",
    cloudinaryImageId: "2c761e85049f81355f6bf864c97666dd",
    locality: "Aliganj",
    areaName: "Aliganj",
    costForTwo: "₹300 for two",
    cuisines: [
      "Desserts",
      "Cakes and Pastries",
      "Burgers",
      "Pastas",
      "Pizzas",
      "Snacks",
      "Beverages",
    ],
    avgRating: 4.5,
    veg: true,
    parentId: "433397",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
  },
  {
    id: "65084",
    name: "Alamgir Hotel",
    cloudinaryImageId: "ruczyhnam8hjwkkzgiwl",
    locality: "Aminabad",
    areaName: "Aminabad",
    costForTwo: "₹300 for two",
    cuisines: ["Mughlai"],
    avgRating: 4.3,
    parentId: "29676",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
  },
  {
    id: "65085",
    name: "Mughal Zaika Aminabad",
    cloudinaryImageId: "yood4aumr1wbxed1odxk",
    locality: "Aminabad",
    areaName: "Aminabad",
    costForTwo: "₹300 for two",
    cuisines: ["Mughlai"],
    avgRating: 4.3,
    parentId: "140984",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
  },
  {
    id: "78815",
    name: "Wow! Momo",
    cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
    locality: "Chowk",
    areaName: "Chowk",
    costForTwo: "₹300 for two",
    cuisines: [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.3,
    parentId: "1776",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
  },
  {
    id: "61060",
    name: "Chahat Biryani",
    cloudinaryImageId: "c46hqxsycegafkxnsi9f",
    locality: "Aliganj",
    areaName: "Aliganj",
    costForTwo: "₹300 for two",
    cuisines: ["Mughlai", "North Indian", "Biryani"],
    avgRating: 4.4,
    parentId: "56864",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
  },
  {
    id: "64648",
    name: "Tunday Kababi (Kapoorthala)",
    cloudinaryImageId: "4506603b1e57cdbd006a7d1585c5089d",
    locality: "Aliganj",
    areaName: "Aliganj",
    costForTwo: "₹200 for two",
    cuisines: ["Mughlai", "Kebabs", "Biryani", "Lucknowi"],
    avgRating: 4.4,
    parentId: "1053",
    avgRatingString: "4.4",
    totalRatingsString: "10K+",
  },
  {
    id: "500868",
    name: "Vadilal Ice Creams",
    cloudinaryImageId: "g3ok1k2jpxjn3lzsdeda",
    locality: "E Block",
    areaName: "Rajajipuram",
    costForTwo: "₹200 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.6,
    veg: true,
    parentId: "11745",
    avgRatingString: "4.6",
    totalRatingsString: "1K+",
  },
  {
    id: "385164",
    name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
    cloudinaryImageId: "u90jeduxghreooj5v3av",
    locality: "Near Bappa lawn Shailendra coaching centre",
    areaName: "Chowk",
    costForTwo: "₹300 for two",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    avgRating: 4.6,
    parentId: "582",
    avgRatingString: "4.6",
    totalRatingsString: "1K+",
  },
  {
    id: "64649",
    name: "Tunday Kababi (Aminabad)",
    cloudinaryImageId: "64682ecce15228d05fd718f607ea3d14",
    locality: "Aminabad",
    areaName: "Aminabad",
    costForTwo: "₹200 for two",
    cuisines: ["Mughlai", "Kebabs", "Biryani", "Lucknowi"],
    avgRating: 4.5,
    parentId: "218444",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
  },
  {
    id: "59654",
    name: "Subway",
    cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
    locality: "Hazratganj",
    areaName: "Hazratganj",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "2",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
  },
  {
    id: "60379",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Saharaganj Mall",
    areaName: "Hazratganj",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
  },
  {
    id: "322639",
    name: "The Good Bowl",
    cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
    locality: "Sitapur Road",
    areaName: "Aliganj",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "7918",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
  },
  {
    id: "63376",
    name: "Keventers - Milkshakes & Desserts",
    cloudinaryImageId: "cbffa2f7cba3dcd75ae945d0e06427f5",
    locality: "Sapru Marg",
    areaName: "Hazratganj",
    costForTwo: "₹200 for two",
    cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
    avgRating: 4.4,
    parentId: "268997",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
  },
];
function Body() {
  return (
    <>
      <div className="body">
        <div className="search-container">
          <h1 class="headingf">Order Your Favourite Food</h1>
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
        {/* <RestaurantCard resData={resObj[3]} /> */}
        {/* use map reduce */}
        {
          resObj.map((e) => {
            return <RestaurantCard resData={e}/>;
          })
        }
        
      </div>
    </>
  );
}

export default Body;
