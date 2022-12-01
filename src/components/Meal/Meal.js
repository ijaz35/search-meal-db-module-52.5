import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb, strArea, strCategory } = props.meal;
    const navigate = useNavigate();
    const showMealDetail = () => {
        const path = `/meal/${idMeal}`;
        navigate(path);
    }

    return (
        <div className="border-4 rounded-3xl border-gray-300">
            <img className="w-80 h-80 m-4" src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h4>{strArea}</h4>
            <p>{strInstructions.slice(0, 200)}</p>
            <Link to={'/meal/' + idMeal}>Show Detail</Link>
            <button onClick={showMealDetail} className='bg-gray-300'>Show Detail</button>
        </div>
    );
};

export default Meal;