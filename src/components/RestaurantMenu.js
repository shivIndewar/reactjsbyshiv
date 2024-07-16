import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurnatMenu from "../utils/useRestaurantMenu";
import PricingUI from "./PricingUI";
import MenuList from "./MenuList";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const[showIndex, setShowIndex] = useState(null);
  const restInfo = useRestaurnatMenu(resId);

  if (restInfo == null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
  } = restInfo?.cards[2]?.card?.card.info;
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

    const commonProps = {props:restInfo?.cards[2]?.card?.card.info, props2: restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card}

    // console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
   const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   console.log(categories);
  return (
    <div >
      <PricingUI props={restInfo?.cards[2]?.card?.card.info} />
      {
        categories.map((cat, index) =>(
          <RestaurantCategory key={cat?.card?.card?.title} data={cat?.card?.card}
           showItems = {index == showIndex ? true : false }
           setShowIndex = {()=>setShowIndex(index)}
          />
        ))}

    </div>
  );
};

export default RestaurantMenu;
