import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { mealID } = useParams();
    const [meal, setMeal] = useState({})
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealID])
    return (
        <div>
            <h2>{meal.strMeal}</h2>
            <img className="w-40 h-40" src={meal.strMealThumb} alt="" />
        </div>
    );
};

export default MealDetail;