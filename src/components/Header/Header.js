import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Restaurant</h1>
            <p>Please Search Your Meal</p>
            <nav>
                <Link to="/search">Search</Link>
            </nav>
        </div>
    );
};

export default Header;