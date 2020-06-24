import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';
class OrderSummary extends Component{
  /*  componentWillUpdate=()=>{
        console.log("OrderSummary will update");
    }*/
    render(){
    const ingredientSummary=Object.keys(this.props.ingredients).map(iKey=>{
    return (<li key={iKey}>
        <span style={{textTransform:'capitalize'}}>{iKey}</span>:{this.props.ingredients[iKey]}
        </li>)
    } 
    )
    return(
            <Aux>
            <h3>You have selected below list of ingredients to your delicious burger</h3>
            <ul>
                {ingredientSummary}
            </ul>
    <h3><strong>Total price is {this.props.price}</strong></h3>            
            <h3>Do you want to Continue ?</h3>
            <Button clicked={this.props.hider} btnType="Danger">CANCEL</Button>
            <Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
            </Aux>
    );
    }
    };

export default OrderSummary;