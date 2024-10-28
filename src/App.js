import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

const CanvasColor = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const colors = [
    { name: "Sunset Orange", value: "#ff6b6b" },
    { name: "Ocean Blue", value: "#4dabf7" },
    { name: "Forest Green", value: "#37b24d" },
    { name: "Royal Purple", value: "#845ef7" },
  ];
  const colorhandler = (inputcolor) => {
    setCurrentColor(inputcolor);
  };

  return (
    <div style={{ backgroundColor: currentColor }}>
      <div>
        {colors.map((color) => (
          <button
            onClick={() => colorhandler(color.value)}
            key={color.value}
            style={{ backgroundColor: color.value }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <p>Current Color: {currentColor}</p>
    </div>
  );
};
export default CanvasColor;
