import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('/api/food').then((response) => {
            setFoods(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Available Food</h1>
            <ul>
                {foods.map((food) => (
                    <li key={food._id}>
                        {food.name} - {food.quantity} units
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
