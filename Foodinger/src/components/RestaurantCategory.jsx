import React from 'react';
import './RestaurantCategory.css';
import ItemLists from './ItemLists';

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="accordian">
      <div className="top">
        <div className="title">
          {data.title} ({data.itemCards.length})
        </div>
        <div className="arrow">⬇️</div>
      </div>
      <div className="itemLists">
        {/* Pass the 'data' prop to the 'ItemLists' component */}
        <ItemLists items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
