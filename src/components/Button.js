import React from "react"
import './CSS/button.css'

function Button(props){
    return(
        <>
        <button onClick={props.onClick} className="btn"
        style={{
            
        }}>{props.name}</button>
        </>
    )
}


export default Button