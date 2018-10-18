import React, { Component } from 'react';
import './Widget.css';
import 'reactstrap';

class Widget extends Component {

  constructor(props){
    super(props);

  }

  getIcon(d){
    const id = d.id;

    switch(true){
      case (id < 300):
        return "imgs/thundercloud.png";
        break;
      case (id < 400):
        return "imgs/sunclouddrizzy.png";
        break;
      case (id < 511):
        return "imgs/rainycloud.png";
        break;
      case (id < 600):
        return "imgs/veryrainycloud.png";
        break;
      case (id < 700):
        return "imgs/snow.png";
        break;
      case (id < 800):
        return "imgs/fog.png";
        break;
      case (id == 800):
        return "imgs/sunny.png";
        break;
      case (id == 801):
        return "imgs/suncloud.png";
        break;
      case (id > 801):
        return "imgs/cloud.png";
        break;
      
    }
  }


  render(props) {
    const d = this.props.details();
    return (
      <div>
        <div class="container">
        <h2>{d.cityname}</h2>
        <hr/>
          <div class="row" id="mainWidget">
            <div class="col-4 widget-el" id="first">
              <img class="widget-img" src={this.getIcon(d)}/>
              <h3>{d.weather}</h3>
            </div>
            <div class="col-4 widget-el" id="second">
              <img src="imgs/temp.png"/>
              <h3>{Math.round((d.temp-273.15) * 100) / 100}°C</h3>
            </div>
            <div class="col-4 widget-el" id="third">
              <img src="imgs/humidity.png"/>
              <h3>{d.humidity}%</h3>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  
}

export default Widget;