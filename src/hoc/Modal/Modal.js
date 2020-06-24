import React,{Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../Aux/Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
class Modal extends Component{

    shouldComponentUpdate(nextProps,nextState){
        console.log("Modal shouldComponentUpdate");
        return nextProps.show!==this.props.show;
    }
  /*  componentWillUpdate=()=>{
        console.log("Modal will update");
    }*/
    render(){
console.log("Modal rendered");
    return(
    <Aux>
        <Backdrop show={this.props.show} clicked={this.props.hider}/>
<div className={classes.Modal}
style={{
    transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)',
    opacity:this.props.show ? '1' :'0'
}}>
    {this.props.children}
    </div>
    </Aux>
    )}
}

export default Modal;