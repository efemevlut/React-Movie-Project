import React from "react";

class Box extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            name:"XGuy"
        }
    }


    state = {
        name: "John"
    }
    render(){
        return (
            <div className="box-wrapper">
                {this.state.name || "Props gönderilmedi"}
            </div>
        )
    }
    
}

export default Box;