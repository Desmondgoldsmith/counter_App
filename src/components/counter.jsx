import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,  
    }
    setIncrement=()=>{
     this.setState({count: this.state.count+1});
    }
    fontChange = {
      fontSize:18,   
    }
    render() { 
        return (
            <React.Fragment>
            <span style={this.fontChange} className={this.changeColor()}>{this.checkStatus()}</span>
            <button onClick={this.setIncrement}  className="btn btn-secondary">Increment</button>
            </React.Fragment>
            );
    }

    checkStatus(){
       const count = this.state.count;
        return count === 0 ? "zero" : count;
    }
    
    changeColor(){
        let change = "badge  m-2 badge-"; 
        change += this.state.count === 0 ? "warning" : "primary";
        return change;
    }
}
 
export default Counter;