import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ResearchBar';
import ResearchBar from './ResearchBar';
import Widget from './Widget';


class App extends Component {

  state={
    jsonres: null
  }

  
  fetchData = (data) =>{

    const api_key = '343a692fdcf51315a134a9317dd7fc9d';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=${api_key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ jsonres:data}))
      .catch(e => console.log('error', e));

    
  }


  render() {
    const exists = (this.state.jsonres && this.state.jsonres.cod == 200);
    return (
      <div className="App">
      <h1>Weather App</h1>
        <ResearchBar callbackFromParent={this.fetchData}/>
        
        
        {exists && <Widget details={()=>{
          let x = this.state.jsonres;
          let obj = {
            id:x.weather[0].id,
            cityname:x.name,
            weather:x.weather[0].main,
            desc:x.weather[0].description,
            temp:x.main.temp,
            humidity:x.main.humidity
          }
          return obj; }}/>}
        
        
      </div>
    );
  }
}

export default App;
