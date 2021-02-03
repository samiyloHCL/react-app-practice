import React,{ Component} from 'react';

class App extends Component {

    state = { 
        newItem: "",
        list: []
     }

     handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
     }

     handleAdd = () => {
        
     }

    render() { 
        return ( 
            <div>
                Add an Item
                <br/>

                <input type="text" placeholder="Type item here..." name="newItem" value={this.state.newItem} onChange={this.handleChange}></input>
                <button onClick={() => this.handleAdd}>Add</button>
            </div>
         );
    }
}
 
export default App;