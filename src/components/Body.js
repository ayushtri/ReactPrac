import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listofRestaurants , setListofRestaurants] = useState(resList);

    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button> 
        </div>
        <div className="filter">
          <button 
            className="filter-btn"
            onClick={()=>{
              const filteredList = listofRestaurants.filter(
                (res) =>  res.data.avgRating > 4
                );
              setListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">  
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;