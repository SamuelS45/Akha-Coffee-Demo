import React from "react";
import './CSS/login.css'

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '',}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        alert('Name Was Submitted: '+ this.state.value)
        e.preventDefault()
    }

    render(){
        return(
            <div className="center">

            <div className="login">
                <h1>Log Into Nature and Natural</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type={'text'} value={this.state.value} onChange={this.handleChange}></input>
                    <input type={'submit'} value={'Submit'}></input>
                </form>
            </div>
            </div>
        )
    }
}

export default LogIn