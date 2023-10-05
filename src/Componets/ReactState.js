import React from "react";

class ReactState extends React.Component{
    constructor(){
        super();
        this.state={
            message: 'Hi,How are you!'
        }
    }
    subscribe(){
        this.setState({
            message: 'Thanks for Subscribing.'
        }

        )
    }
    render(){
        return (
            <div>
         <h1>{this.state.message}</h1>
        <button onClick={()=> { this.subscribe() }}>Subscribe</button>
            </div>
        ) 
    }
}
export default ReactState;