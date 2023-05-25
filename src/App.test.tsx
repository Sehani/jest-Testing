import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from './App';


test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVilotRed'});

  
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton.textContent).toBe ('Change to Medium Violet Red');
});

test("initial conditions", () => {
  render(<App />);

 
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVilotRed'});

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

