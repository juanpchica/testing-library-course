import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });

  expect(button).toHaveStyle({ backgroundColor: "red" });

  // Interact with element
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
