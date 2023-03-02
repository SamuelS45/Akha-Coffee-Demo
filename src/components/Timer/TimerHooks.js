import React, {useEffect, useState} from "react";



function TimerHooks(){
    let [seconds, setSeconds] = useState(0)
    let [distance, setDistance] = useState(0)
    function tick(){
        setSeconds(seconds=seconds+1)
        setDistance(distance=distance+10)
    }
    useEffect(()=>{
        const interval = setInterval(()=>tick(), 1000)
    })
    return(
        <>
        <h1>Timer using Hooks</h1>
        <h1>Timer Hooks: {seconds}</h1>
        <div className="bar" style={
            {
                height: '100px',
                width: distance,
                backgroundColor: 'aqua',
                borderRadius: '20px',
                transition: '.5s'
            }
        }>

        </div>
        </>
    )
}


export default TimerHooks