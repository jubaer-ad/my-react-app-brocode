import { useState } from "react";

function isStringInt(str) {
  // 1. Check if the input is a non-empty string
  if (typeof str !== "string" || str.trim() === "") {
    return false;
  }

  // 2. Convert the string to a number (using unary plus or Number())
  const num = Number(str);

  // 3. Check if the conversion resulted in a non-NaN value AND is a whole number
  return !isNaN(num) && Number.isInteger(num) ? num : -1;
}

function Food() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Sushi"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("add-food-input").value;
    document.getElementById("add-food-input").value = "";
    console.log(newFood);
    console.log(foods.includes(newFood));
    if (newFood && !foods.includes(newFood)) {
      setFoods((f) => [...f, newFood]);
    }
    if (foods.includes(newFood)) {
      alert("This food is already in the menu");
    }
  };

  const handleAddFoodKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddFood();
    }
  };

  const handleRemoveFood = () => {
    const toBeRemoved = document.getElementById("remove-food-input").value;
    document.getElementById("remove-food-input").value = "";

    let index = isStringInt(toBeRemoved);
    if (index < 0) {
      index = foods.indexOf(toBeRemoved);
    }
    if (index < 0 || index >= foods.length) {
      alert("Invalid data to be removed from the menu");
    } else {
      let updatedFoods = foods.filter((food, i) => i !== index);
      setFoods((f) => updatedFoods);
    }
  };

  const handleRemoveFoodKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRemoveFood();
    }
  };

  return (
    <>
      <div>
        <h1>Food Menu</h1>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
          <p>Add Food</p>
          <input
            id="add-food-input"
            onKeyDown={handleAddFoodKeyDown}
            type="text"
          />
          <button onClick={handleAddFood}>Add Food</button>

          <p>Enter food name or index to be removed from the menu</p>
          <input
            id="remove-food-input"
            onKeyDown={handleRemoveFoodKeyDown}
            type="text"
          />
          <button onClick={handleRemoveFood}>Remove Food</button>
        </ul>
      </div>
    </>
  );
}

export default Food;
