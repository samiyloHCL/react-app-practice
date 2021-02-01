import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        imageUrl: "https://picsum.photos/200"
     }

     handleIncriment = () => {

        this.setState({
            count: this.state.count + 1
        })
    }
    render() { 

    
        return( 
            <React.Fragment>
                <img src={this.state.imageUrl} alt="henlo" />
                <span>{this.formatCount()}</span> 
                <button onClick={this.handleIncriment} >Increment</button> 
            </React.Fragment>);
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;