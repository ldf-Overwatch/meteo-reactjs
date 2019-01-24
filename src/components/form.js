import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
    
    render(){
        
        return(
            <form onSubmit = {this.props.loadWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <br/>
                <button>Get Weather</button>
            </form>
        
        )
    }
}

export default Form;