import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {
    const [listofRestaurants , setListofRestaurants] = useState([]);

    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    

    const fetchData = async () =>{
        const data = await fetch(
          API_URL
        );

        const json = await data.json();

        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    }

    return listofRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
      
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Food or Restaurant"  
            value = {searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            />
          <button onClick={() => {

            const filteredList = listofRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

            setFilteredRestaurantsList(filteredList);

          }}>Search</button> 
        </div>

        <div className="filter">
          <button 
            className="filter-btn"
            onClick={()=>{

              const filteredList = listofRestaurants.filter(
                (res) =>  res.info.avgRating > 4.5
                );

              setFilteredRestaurantsList(filteredList);
            }}
          >
            Top Rated Restaurants
            </button>
        </div>

        <div className="res-container">  
          {filteredRestaurantsList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;