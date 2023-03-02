import React, {useState} from "react";
// import { useEffect } from "react";
import './CSS/login.css'
// import axios from "axios";
// import { json } from "stream/consumers";

function LogInH(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    function handleEmail(e){
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    // useEffect((e)=>{{
    //     setValue(e.target.value)
    // }})
    function handleSubmit(e){
        // axios().then((res)=>res.json)
        alert(`Your Email: ${email}'was Submitted and Password ${password}`)
        e.preventDefault()
    }
    return(
        <div className="center">

        <div className="login">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            {/* <h1>{value}</h1> */}
            <br></br>
            <input type={'text'} onChange={handleEmail} value={email}></input>
            <br></br>
            <label>Password:</label>
            <br></br>
            <input onChange={handlePassword} value={password} name={'password'}></input>
            <br></br>
            <input type={'submit'}></input>
        </form>
        </div>
        </div>
    )
}

export default LogInH