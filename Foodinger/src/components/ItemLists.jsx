import React from "react";
import "./ItemLists.css";

const ItemLists = ({ items }) => {
  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="item">
            <div className="leftItem">
              <div className="name">{item.card.info.name}</div>
              <div className="price">
                {" "}
                <span>&#8377;</span>
                {item.card.info.price / 100}
              </div>
              <div className="description">
                <p>{item.card.info.description}</p>
              </div>
            </div>
            <div className="rightItem">
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} alt={item.card.info.name} />
            <button>ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemLists;
