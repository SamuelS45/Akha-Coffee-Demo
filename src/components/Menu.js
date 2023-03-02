import React, {useEffect, useState} from "react"

function Menu(){
    let [width, setWidth] = useState('50px')
    let [view, setView] = useState('none')
    function show(){
        if(width == '50px'){
            setWidth('100%')
            setView('block')
        }else{
            setWidth('50px')
            setView('none')
        }
    }
    // useEffect(()=>{
    //     const interval = setInterval(()=>show(),1000)
    // })
    return(
        <>
        <div className="menu" style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: width,
            height: '100px',
            backgroundColor: 'lightblue',
            transition: '0.5s',
            // marginLeft: '10rem'
        }}>
            <ul style={{
                display: view,
                margin: '1rem'
            }}>
                <li>Home</li>
                <li>About</li>
            </ul>
            <button onClick={show} style={{
                width: '50px',
                height: '100px',
                transition: '.5s'
            }}>Click To Show Menu</button>
        </div>
        </>
    )
}

export default Menu