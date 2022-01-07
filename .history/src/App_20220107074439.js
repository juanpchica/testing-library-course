import { useState } from "react";

import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input
        type='checkbox'
        onChange={(e) => setIsDisabled(e.target.checked)}
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        id='disabled-check-button'
      />
      <label htmlFor='disabled-check-button'>Disabled Button</label>
    </div>
  );
}

export default App;
