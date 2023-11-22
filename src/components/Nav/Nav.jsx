import React from 'react';
import './Nav.css';

const Nav = () => {

    const navbarList = `Jewelry & Accessories
    Clothing & Shoes
    Home & Living
    Wedding & Party
    Toy & Entertainment
    Art & Collection
    Craft Supplies & Tools`.split("\n");

    return (
        <div className='d-flex justify-content-between flex-row'>
            {
                navbarList.map((item, idx) => (
                    <span className="nav-item" key={idx}>{item.trim()}</span>
                ))
            }
        </div>
    );
};

export default Nav;
