import React,{Component} from "react";
import withCounter from "./withCounter";

class HoverCounter  extends  Component{
    
    render(){
        const {count , incrementHandler } = this.props
        return <h3 onMouseOver={incrementHandler}> Hovered {count} times </h3>
    }
}

export default withCounter(HoverCounter,10)