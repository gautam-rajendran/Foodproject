import React from "react";
import './State.css'

class State extends React.Component {
   
   state = {
    Answer : ""
   }
   MaleHandler=()=>{
    
    this.setState({Answer:"Male"})
   }
   FeHandler=()=>{
    this.setState({Answer: "Female"})
   }
 render() {

     return (
        
      <div className="mainbox">
        <div className="box">
            <h4>Sex : {this.state.Answer}</h4>
        </div>
        <div className="btn">
            <button onClick={this.MaleHandler}>Male</button>&nbsp;
            <button onClick={this.FeHandler}>Female</button>
        </div>
      </div>
    )
  }
}

export default State