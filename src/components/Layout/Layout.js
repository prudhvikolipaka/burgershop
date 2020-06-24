import React,{Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    
    state={
        showSideDrawer:false
    }

    sideDrawerCloseHandler =()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerOpenHandler =()=>{
        this.setState((prevState)=>
        {return {showSideDrawer: !prevState.sideDrawerCloseHandler}})
    }
render(){

    return(
    
        <Aux>
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
            <SideDrawer show={this.state.showSideDrawer} hider={this.sideDrawerCloseHandler}/>
            <main className={classes.Content} >
            {this.props.children}
            </main>
        </Aux>
        );    
    }
}

export default Layout;
