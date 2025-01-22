import { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const restaurantData = resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwoMessage = "",
  } = restaurantData;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3 className="font-bold"></h3>

      {/* Categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (showIndex === index) {
              setShowIndex(null);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
