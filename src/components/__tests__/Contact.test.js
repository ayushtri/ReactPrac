import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  //it or test are the same the just alias

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
