import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withVegetarianLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_DATA_VEG from "../mocks/resCardMockVeg.json";

describe("RestaurantCard component test cases", () => {
  it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument("Pizza Hut");
  });

  it("Should render RestaurantCard component with vegetarian label", () => {
    const RestaurantCardVeg = withVegetarianLabel(RestaurantCard);

    render(<RestaurantCardVeg resData={MOCK_DATA_VEG} />);

    const name = screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument("La Pino'z Pizza");
  });
});
