import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurnatMenu from "../utils/useRestaurantMenu";
import PricingUI from "./PricingUI";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const { resId } = useParams();

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

    console.log("Common Props", commonProps);
  return (
    <div className="grid h-screen place-items-center">
      <PricingUI props={commonProps} />
      <MenuList  props={itemCards} />      
      {/* <h1 className="text-lg font-extrabold">{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info.id}>
            {item?.card?.info.name} -{" "}
            {item?.card?.info.defaultPrice || item?.card?.info.price}
          </li> 
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
