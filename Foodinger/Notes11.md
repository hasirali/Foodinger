# higher Order Components

- Higher order componet is function that takes a component and resturrns a  componennts
- just a normal javascript function.
- takes a components enhance it and return its

eg:
```
import React from "react";
import { CDN_SRC } from "../Utils/constants";
import "./RestaurantCard.css";

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
        <button className="btn-1">Order Now</button>
      </div>
    </div>
  );
};

// higher Order Component
// input - RestaurantCard and output enhance version of RestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="open-label">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
```

Body
````

import useRestaurant from "../Utils/useRestaurant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
.
.
.
.
.

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  .
  .
  .
  .
  .
  .


          <!-- change hehre -->
            {e.info.promoted ? (
              <RestaurantCardPromoted resData={e} />
              
            ) : (
              <RestaurantCard resData={e} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
````