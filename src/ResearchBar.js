import React, { Component } from 'react';
import $ from 'jquery';
import 'reactstrap';

class ResearchBar extends Component {


  constructor(props){
    super(props);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onSubmitText = (event) =>{
    event.preventDefault();
    this.props.callbackFromParent(document.getElementById("cityName").value);
  }

  updateInput = () =>{
    if(!this.props.jsonres){

      console.log("manz");
      if(this.props.jsonres.cod==404){
        $("#cityName").addClass("has-error");
        $("#cityName").removeClass("has-success");

        $(".feedback").show();
        $(".feedback").text("City not found");
      }
      else{
        $("#cityName").addClass("has-success");
        $("#cityName").removeClass("has-error");
        $(".feedback").hide();

        //let id = this.state.jsonres["weather"][0].id;
        //alert(id);
      }
    }  
  }
  
  render(props) {
    return (
      <div>
        <form onSubmit={this.onSubmitText}>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" id="cityName" />
            <div className="feedback"></div>
          </div>
        </form>
      </div>
    );
    
  }
  
}

export default ResearchBar;