import React, { Component } from 'react';

class Counter extends Component {
    state = {
     count : 0,
    }
     
    styles = {
        fontSize:18,
    }

    render() { 
         return <React.Fragment> 
        <span style={this.styles} className={this.changeColor()}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
         </React.Fragment>;
    }

    changeColor(){
        let colors = "badge m-2 badge-";
        colors += this.state.count === 0 ? "warning" : "primary";
        return colors;
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count 
    }

    
}
 
export default Counter;