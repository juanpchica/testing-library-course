import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: isDisabled ? 'gray' :  }}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
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
