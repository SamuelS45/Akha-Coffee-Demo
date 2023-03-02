// import { render } from "ejs";
import React from "react";
// import { ReactComponentElement } from "react";



class Timer extends React.Component {
    constructor(props){

        super(props)
        this.state = {
            seconds: 0,
            distance: 0
        }
    }
    tick(){
        this.setState(state=>({
            seconds: state.seconds +1
        }))
    }
    move(){
        this.setState(state=>({
            distance: state.distance + 10 
        })) 
    }
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
        this.interval = setInterval(() => this.move(), 1000);
    }
    componentWillUnmount(){

    }
    
    render(){
        return(
        <>
        <h1>Timer Class: {this.state.seconds}</h1>
        <div className="bar" style={{

            height: '100px',
            backgroundColor: 'aqua',
            width: this.state.distance,
            transition: '.5s',
            borderRadius: '20px'
            
        }}></div>
        </>
        );
    }
}

export default Timer