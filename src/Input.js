// import e from "express";
import React, {useState} from "react";


function Input(){
    const [value, setValues] = useState('')
    function handleEvent(e){
        setValues(e.target.value)
    }
    function handleClick(e){
        alert('Log in is being Processed to be sent to DB...')
        e.preventDefault()
    }
    return(
        <>
        <h1>Learning</h1>
        <h1>{value}</h1>
        <input onChange={handleEvent} value={value}></input>
        <button onClick={handleClick}>Click</button>
        </>
    )
}
export default Input