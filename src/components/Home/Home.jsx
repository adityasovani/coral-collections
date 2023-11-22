import React from 'react';
import "./Home.css";
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import HeaderContent from '../HeaderContent/HeaderContent';

const Home = () => {
    return (
        <div className='jumbotron' style={{ height: 250 }}>
            <div className="container w-75">
                <div className="header-wrapper">
                    <Header />
                    <hr className="header-separator" />
                    <Nav />
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
};

export default Home;