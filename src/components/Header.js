import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContexts";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md mb-2 p-1 bg-gray-100">
      <Link to="/">
        <div className="flex">
          <img className="w-24" src={LOGO_URL} />
          <h1 className="flex p-2 my-2 font-bold text-6xl items-end">
            Foodifyy
          </h1>
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-gray-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-gray-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-gray-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-gray-500 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 hover:text-gray-500"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
