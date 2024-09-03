import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [listofRestaurants , setListofRestaurants] = useState(resList);

    useEffect(() => {
      fetchData();
    }, []);

    

    const fetchData = async () =>{
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListofRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
    }


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
                (res) =>  res.info.avgRating > 4.5
                );
              setListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">  
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;