import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
          
     state={
        email : "",
        password : ""
     }

     emailhandler =(event)=>{
         this.setState({email : event.target.value })
         
     }
     passwordhadler =(event)=>{

        this.setState({password : event.target.value})
        
     }

     submithandler =(event)=>{
        event.preventDefault()
        console.log(this.state)
     }

  render() {
    return (
      <div className="box1">
        <div className="box2">
        <form onClick={this.submithandler}>
            <label className="form">Email address</label>
            <input className="form" type='text' onChange={this.emailhandler}/>
            <br/>
            <label className="form">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form" type='password' onChange={this.passwordhadler}/>
            <br/>
            <input className="btnbtn" type='submit' value="Login"/>
        </form>
        </div>
      </div>
    )
  }
}

export default Form