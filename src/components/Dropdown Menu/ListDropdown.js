
import React, {useState} from "react";
import {BsArrowDownCircleFill as Arrow} from 'react-icons/bs'
import DropdownData from './DropdownData'
import './dropMenu.css';
function Dropdown(props){
    let [height, setHeight] = useState('10rem');
    let [text, setText] = useState('0.01');
    let [showing, setShowing] = useState('none');
    function show(){
        if(height ==='10rem'){
            setShowing('block')
            setHeight('15rem')
            setInterval(() => {setText('1')
                
            }, 300); 
        }else{
            setHeight('10rem')
            setShowing('none')
            setText('0.01')
        }
    }
    return(
        <div className="menu" id="menu" onClick={show} style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems:"center",
            width:'90%',
            height: height,
            transition:'.5s',
            borderRadius:'10px',
            margin:'1rem',
            padding:'1rem',
            // alignItems:'center',
            color:'var(--mainCol)',
        }}>

            {/* <button 
                style={{
                    // transform:'scale(1.5)'
                    display:'flex',
                    // flexDirection:'row',
                    // justifyContent
                    backgroundColor:'transparent',
                    border:'none',
                    alignItems:'center',
                    marginLeft:'1rem', 
                    
                }}>
                <Arrow size={40} color={'var(--textCol)'} />
            </button> */}
                    <div style={{
                        display:'flex',
                        // justifyContent:'center',
                        alignItems:'center'
                    }}>
            <h1 style={{
                margin:'1rem',
                // justifyContent:'center'
                }}>
            {props.title}
            </h1>
            </div>
            <p style={{
                display:`${showing}`,
                transition:'.5s',
                opacity:`${text}`
            }}>{props.text}</p>
        </div>
    )
}
// export default Dropdown
// const ids = [1,2,3,4,5]
function listDropdown(){
    const dropdownMapped = DropdownData.map((e)=><Dropdown key={e.title} title={e.title} text={e.text}/>)
    return(
        <>
        {/* <h1>FAQ</h1> */}
        {dropdownMapped}
        </>
    )
}


export default listDropdown