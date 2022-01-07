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

  // Expect the button text to change to red
  expect(button.textContent).toBe("Change to red");
});

test("button enable and check disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
});

test("button must be disabled when checkbox checked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to Blue/i });

  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(button).not.toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});
