import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger =(props)=>
{
    let tranformedIng=Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
             return <BurgerIngredient key={igKey+i} type={igKey}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)},[]);
    if (tranformedIng.length===0){
        tranformedIng=<p>Please Add Ingredients</p>
    }
console.log(tranformedIng);
        return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {tranformedIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger; 