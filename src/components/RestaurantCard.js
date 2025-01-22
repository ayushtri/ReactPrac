import { CLOUDINARY_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    areaName,
  } = resData?.info;

  const { deliveryTime } = resData?.info.sla;

  // console.log(resData);

  return (
    <div
      data-testid="resCard"
      className="m-3 p-4 w-[250px] h-[550px] rounded-lg shadow-md bg-[#f0f0f0] hover:shadow-lg hover:bg-[#e0e0e0] transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img
        className="rounded-lg w-full h-[220px] object-cover"
        src={
          /*PIC_SUM_URL + id%100  + '/200/230'*/
          CLOUDINARY_URL + cloudinaryImageId
        }
        alt="Restaurant Image"
      />
      <div className="flex flex-col">
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>
          <u>Locality</u>: {locality}
        </h4>
        <h4>
          <u>Area</u>: {areaName}
        </h4>
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => RestaurantCardVeg

export const withVegetarianLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative group">
        <label
          className="absolute left-1 bg-lime-400 text-white m-2 p-2 rounded z-10 pointer-events-none 
            transform group-hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Pure veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
