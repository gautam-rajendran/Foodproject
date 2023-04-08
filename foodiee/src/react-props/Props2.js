import React from "react";

class Props2 extends React.Component {

    render(){
        return(
            <div>
                <h4>Component three - class component</h4>
                <h4>Employee name : {this.props.emp}</h4>
                <h5>Occupation : {this.props.occupation}</h5>
            </div>
        )
    }
}

export default Props2
