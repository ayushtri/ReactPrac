import { useParams } from "react-router"; 
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    const restaurantData = resInfo?.data?.cards?.[2]?.card?.card?.info || {}; 

    const { name = "Unknown Restaurant", cuisines = [], costForTwoMessage = "" } = restaurantData; 

    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    return resInfo === null ? <Shimmer /> : (

        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <h3>Recommended</h3>
            <ul>
                {itemCards.map(item => 
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                )}
            </ul>
            <h3></h3>

        </div>
    )
}

export default RestaurantMenu;