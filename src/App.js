import React, { Component } from 'react';
import Form from "./components/form.js";
import Titles   from "./components/Titles";
import Weather from "./components/Weather";
import './App.css';


const Api_Key = "4a676ff41761841cfc009a03baceb9de";
    
    class App extends Component {
    
        state= {
        
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        };
    
    
       
        getWeather = async ( e) => {
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
    
            e.preventDefault();
        
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=${Api_Key}`);
        
            const response = await api_call.json();
        
            console.log(response);
            
            if(city && country){
                this.setState({
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,
                    humidity: response.main.humidity,
                    description: response.weather[0].description,
                    error: ""
                })
            }else{
                this.setState({
                    error: "Please input search values..."
                })
            }
        };
    render() {
        return (
            <div>
                <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className=" title-container">
                <Titles />
                <Form loadWeather={this.getWeather} />
                                <br/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    
                />
            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}



export default App;
