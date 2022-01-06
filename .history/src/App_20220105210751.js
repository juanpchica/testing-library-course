import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  return (
    <div>
      <button
        onClick={() => setButtonColor("blue")}
        style={{ backgroundColor: buttonColor }}
      >
        Change to blue
      </button>
    </div>
  );
}

export default App;
