import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[   
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'}
];
const buildControls =(props)=>
(
<div className={classes.BuildControls}>
<p    style={{fontWeight: "bold",fontSize:"24px"}}>Current Price: {props.price}</p>
{
    controls.map(ctrl=>
        (<BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        addIngredient={()=> props.ingredientAdded(ctrl.type)}
        removeIngredient={()=>props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        mDisabledInfo={props.mDisabledInfo[ctrl.type]}
        /> ) ) }
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchased}><strong>Order Now</strong></button>
</div>
)


export default buildControls;