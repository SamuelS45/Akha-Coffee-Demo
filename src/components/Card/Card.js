import React from "react";
import './card.css'
// import Button from "./Button";

function Card(props){
    
    return(
        <div className="card-container">
            <div className="card" style={{
            }}>
                <h1 style={{textAlign:'center',margin:'2rem',color:props.color}}>{props.title}</h1>
                <div className="crop" style={{}}>
                    <img id="card-img" alt={props.alt} style={{
                        
                        // height:'100vh'
                        
                        
                    }} src={props.src}>
                    </img>
                </div>
                <span style={{margin:'1rem', overflow:'auto'}}>
                <p>
                    {props.text}
                </p>
                </span>
                <button onClick={props.onClick} className="btn">{props.name}</button>
            </div>
        </div>
    )
}


export default Card