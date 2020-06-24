import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../hoc/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
const INGREDIENT_PRICES={
    salad: 0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}
class BurgerBuilder extends Component{


    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }
    updatePurchaseState =(ingredients)=>
    {
 
        const sum= Object.keys(ingredients)
        .map(
            count=>{
            return ingredients[count];})
            .reduce((sum,el)=>{
                return el+sum;
            }
            ,0);
            this.setState({purchasable:sum>0});
        }

        purchasehandler=()=>{
        this.setState({purchasing:true});
        }
        hidePurchasehandler=()=>{
            console.log("inside hide purchase handler")
            this.setState({purchasing:false});
                    }
    
        addIngredientHandler =(type) =>
    {
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount +1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const updatedPrice=parseFloat((oldPrice +INGREDIENT_PRICES[type]).toFixed(1));
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice})
      this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler =(type) =>
    {
        const oldCount=this.state.ingredients[type];
        if(oldCount!==0)
        {const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
 
        updatedIngredients[type]=updatedCount;
        const oldPrice=this.state.totalPrice;
        const updatedPrice=parseFloat((oldPrice -INGREDIENT_PRICES[type]).toFixed(1))
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice})
        this.updatePurchaseState(updatedIngredients);  
    }
    }
    purchaseContinueHandler = () =>
    {
        alert('Purchase successful');
        this.setState({purchasing:false});
    }
    render()
    {
        const disabledInfo= {...this.state.ingredients}
        for (let k in disabledInfo){
            disabledInfo[k]=disabledInfo[k]<=0
        }
        const mDisabledInfo= {...this.state.ingredients}
        for (let k in disabledInfo){
            mDisabledInfo[k]=mDisabledInfo[k]>=2
        }
        return(
                <Aux>
                    <Modal show={this.state.purchasing} hider={this.hidePurchasehandler}>
                        <OrderSummary price={this.state.totalPrice} 
                                      ingredients={this.state.ingredients} 
                                      hider={this.hidePurchasehandler}
                                      continue={this.purchaseContinueHandler}/>
                    </Modal>
                     <div>
                    <Burger ingredients={this.state.ingredients}/> 
                    </div>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} mDisabledInfo={mDisabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchased={this.purchasehandler}
                    />
                </Aux>
            ); 
    }
}
export default BurgerBuilder;