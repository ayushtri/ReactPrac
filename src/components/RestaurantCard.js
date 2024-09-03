import { CLOUDINARY_URL, PIC_SUM_URL } from "../utils/constants";

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

    const {
      deliveryTime,
    } = resData?.info.sla;
  
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        <img
          className="res-logo"
          src={
            /*PIC_SUM_URL + id%100  + '/200/230'*/
            CLOUDINARY_URL + cloudinaryImageId
          }
          alt= "Restaurant Image"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4><u>Locality</u>: {locality}</h4>
        <h4><u>Area</u>: {areaName}</h4>
      </div>
    );
  };

  export default RestaurantCard;