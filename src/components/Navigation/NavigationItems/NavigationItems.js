import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems =()=> (

        <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>
        </ul>
    
);
export default navigationItems;

