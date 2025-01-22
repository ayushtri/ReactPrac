import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CLOUDINARY_URL, NO_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-4 -right-1">
              <button
                className="p-2 mx-5 bg-gray-950 hover:bg-slate-700 text-white shadow-lg rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={
                item.card.info.imageId
                  ? CLOUDINARY_URL + item.card.info.imageId
                  : NO_IMAGE_URL
              }
              alt={item.card.info.imageId}
              className="w-full h-28 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
