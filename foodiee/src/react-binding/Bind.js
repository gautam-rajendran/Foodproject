import React from "react";

class Bind extends React.Component{

  state={
    fname : "gautham raasendiran",
  occupation : ""
  }

 handler = (goo)=>{

      this.setState({occupation : goo})
 }


render(){

  return(
    <div>
      <h3>Name : {this.state.fname}</h3>
      <h4>work : {this.state.occupation}</h4>
      <button onClick={this.handler.bind(this,"Web developer")}>web developer</button>&nbsp;
      <button onClick={this.handler.bind(this, "App developer")}>App developer</button>
    </div>
  )
}


}

export default Bind