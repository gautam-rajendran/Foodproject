import React from "react";

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            Neram : new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({Neram: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render(){
        return(
            <div>
                <h4>Time : {this.state.Neram}</h4>
            </div>
        )
    }
}

export default Clock