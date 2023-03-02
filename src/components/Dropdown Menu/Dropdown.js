import React, {useState} from "react";
import {BsArrowDownCircleFill as Arrow} from 'react-icons/bs'



function Dropdown(){
    let [height, setHeight] = useState('50px');
    function show(){
        if(height ==='50px'){
            setHeight('20rem')
        }else{
            setHeight('50px')
        }
    }
    return(
        <div className="menu" style={{
            display:'flex',
            justifyContent: 'flex-start',
            width:'100%',
            height: height,
            // backgroundColor: 'lightblue',
            transition:'.5s',
            borderRadius:'20px'
        }}>
            <button onClick={show} style={{
                // transform:'scale(1.5)'
                display:'flex',
                // justifyContent
                backgroundColor:'transparent',
                border:'none',
                alignItems:'center',
                marginLeft:'1rem', 
                
            }}><Arrow size={40} color={'lightcoral'} /></button>
        </div>
    )
}


export default Dropdown