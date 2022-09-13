import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Contact from './Contact';
import Desert from './Desert';
import Drinks from './Drinks';
import LunchDinner from './LunchDinner';
import MainDish from './MainDish';
import Starters from './Starters';

const Menu = () => {
    return (
        <div>
            <Banner></Banner>
            <Starters></Starters>
            <MainDish></MainDish>
            <Desert></Desert>
            <Banner2></Banner2>
            <LunchDinner></LunchDinner>
            <Banner3></Banner3>
            <Drinks></Drinks>
            <Contact></Contact>
        </div>
    );
};

export default Menu;