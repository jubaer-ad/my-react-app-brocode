import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  const [comment, setComment] = useState("");

  const [payment, setPayment] = useState("");

  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" onChange={handleCountChange} />
      <p>Count: {count}</p>

      <textarea
        placeholder="Leave a comment..."
        onChange={handleCommentChange}
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select a payment option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="Bkash">Bkash</option>
        <option value="Cash">Cash</option>
      </select>
      <p>Payment type: {payment === "" ? "None" : payment}</p>

      <label>
        <input
          value="Pick Up"
          type="radio"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          value="Delivery"
          type="radio"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  );
}

export default OnChange;
