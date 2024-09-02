import { PIC_SUM_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      id,
      cloudinaryImageId, /* Not working  */
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
  
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
            PIC_SUM_URL + id%100  + '/200/230'
          }
          alt= "Restaurant Image"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;