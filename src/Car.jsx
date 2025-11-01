import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  });

  const handleYearUpdate = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  const handleModelUpdate = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  const handleBrandUpdate = (e) => {
    setCar((c) => {
      return { ...c, brand: e.target.value };
    });
  };

  return (
    <>
      <h1>Car Details</h1>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>

      <input type="text" value={car.brand} onChange={handleBrandUpdate} />
      <br />
      <input type="text" value={car.model} onChange={handleModelUpdate} />
      <br />
      <input type="number" value={car.year} onChange={handleYearUpdate} />
    </>
  );
}

export default Car;
