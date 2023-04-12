import React from "react";
import './Counter.css'
class Counter extends React.Component {
   
    state={
        qty : 1,
        price : 139000
    }
    Addhandler =()=>{
        this.setState({qty : this.state.qty + 1})
    }
    Removehandler =()=>{
        this.setState({qty : this.state.qty - 1})
    }

  render(){
    return(
        <div className="mainboxx">
             <img src="https://m.media-amazon.com/images/I/61lKQWyMdDL._SL1500_.jpg" alt="#"/>
             <div className="content">
            <h4>Apple 14pro</h4>
            <p>price: {this.state.qty * this.state.price}</p>
            <h5>Quantity :{this.state.qty}</h5>
            </div>
            <div className="btnn">
                <button onClick={this.Addhandler}>Add</button>&nbsp;
                <button onClick={this.Removehandler}>remove</button>
            </div>
        </div>
        
    )
  }

}

export default Counter