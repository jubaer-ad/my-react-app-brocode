import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <>
      <div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="counter-button" onClick={handleReset}>
          Reset
        </button>
        <button className="counter-button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
