import { useState } from "react";
function Cars() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    setCars((c) => [
      ...c,
      { carYear: carYear, carBrand: carBrand, carModel: carModel },
    ]);

    setCarYear(new Date().getFullYear());
    setCarBrand("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleBrandChange = (e) => {
    setCarBrand(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Cars Component</h2>
        <input type="number" value={carYear} onChange={handleYearChange} />{" "}
        <br />
        <input type="text" value={carBrand} onChange={handleBrandChange} />{" "}
        <br />
        <input type="text" value={carModel} onChange={handleModelChange} />{" "}
        <br />
        <button onClick={handleAddCar}>Add Car</button>
        <ul>
          {cars.map((c, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              Year: {c.carYear}, Brand: {c.carBrand}, Model: {c.carModelsd}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cars;
