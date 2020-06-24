import React from 'react';
import BackDrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
const sideDrawer =(props)=> {
    let attachedClass=[classes.SideDrawer,classes.Close];
    if (props.show){
        attachedClass=[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
        <BackDrop show={props.show} clicked={props.hider}/>
        <div className={attachedClass.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
                </div>
            <nav >
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
    };
export default sideDrawer;

