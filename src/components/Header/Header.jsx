import React from 'react';
import './Header.css';
import search from '../../assets/icons/search.svg';
import brand from '../../assets/icons/brand.svg';
import account from '../../assets/icons/account.svg';
import shopping from '../../assets/icons/shopping.svg';

const Header = () => {
    return (
        <div className="d-flex justify-content-between flex-row mt-2">
            <span>
                <img src={search} alt="search" />
            </span>
            <div className='flex-row d-flex align-items-center' style={{ gap: '0.3rem' }}>
                <img src={brand} alt="." />
                <span className="brand-txt">CORAL</span>
                <img src={brand} alt="." />
            </div>
            <div className="d-flex flex-row" style={{ gap: '0.99rem' }}>
                <div className="d-flex flex-row align-items-center">
                    <img src={account} alt="account" />
                    <span className='account-text' style={{marginLeft:'0.5rem'}}>Account</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <img src={shopping} alt="bag" />
                    <span className='account-text' style={{marginLeft:'0.5rem'}}>Shopping</span>
                </div>
            </div>
        </div>
    )
};

export default Header;