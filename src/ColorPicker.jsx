import { useState } from "react";

function getContrastColor(hexColor) {
  // 1. Convert HEX to RGB
  // Remove the # and parse r, g, b values (e.g., FFFFFF -> 255, 255, 255)
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // 2. Calculate Luminance
  // This uses a standard formula to determine perceived brightness.
  // The values 0.299, 0.587, and 0.114 are the coefficients for human vision.
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // 3. Return Black or White
  // A threshold of 0.5 is commonly used.
  // If luminance is > 0.5, the color is light, so use black text.
  // Otherwise, the color is dark, so use white text.
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const [contrastColor, setContrastColor] = useState("#000000");

  const handleColorChange = (e) => {
    setContrastColor(getContrastColor(e.target.value));
    setColor(e.target.value);
  };
  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div
          className="color-display"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          <p>Selected Color: {color}</p>
        </div>

        <label>Select a color</label>
        <input type="color" onChange={handleColorChange} />
      </div>
    </>
  );
}

export default ColorPicker;
