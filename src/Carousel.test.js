import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("should render without crashing", function () {
  render(<Carousel />)
})

it("matches snapshot" , function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />)

   // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

   // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  //move backwards in the carousel
  const leftArrow = queryByTestId("left-arrow")
  fireEvent.click(leftArrow)

  // expect the first image to show, but not the second 
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
})

it("hides left arrow on first page", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />)

   // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  expect(queryByTestId("left-arrow")).toHaveClass("hidden");
  expect(queryByTestId("right-arrow")).not.toHaveClass("hidden")
})

it("hides right arrow on last page", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />)

   // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel to last page
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(queryByTestId("right-arrow")).toHaveClass("hidden");
  expect(queryByTestId("left-arrow")).not.toHaveClass("hidden");
})