import RestaurantCard, { withVegetarianLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContexts";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardVeg = withVegetarianLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantsList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black rounded p-2"
            data-testid="searchInput"
            type="text"
            placeholder="Search Food or Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200 shadow-md"
            onClick={() => {
              const filteredList = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurantsList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );

              setFilteredRestaurantsList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="font-bold mx-2">UserName </label>
          <input
            className="border border-black p-2 rounded"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurantsList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
