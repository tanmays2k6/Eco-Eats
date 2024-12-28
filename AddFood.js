import React, { useState } from "react";
import axios from "axios";

const AddFood = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    quantity: "",
    location: "",
    expiryDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/food", foodData);
      if (response.status === 201) {
        setMessage("Food item added successfully!");
        setFoodData({
          name: "",
          description: "",
          quantity: "",
          location: "",
          expiryDate: "",
        });
      }
    } catch (error) {
      setMessage("Failed to add food item. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Food Item</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={foodData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={foodData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={foodData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={foodData.location}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="expiryDate"
          value={foodData.expiryDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
