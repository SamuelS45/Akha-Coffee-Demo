import React, {useEffect, useState} from "react";
import './CSS/carousel.css'
import {AiOutlineArrowLeft as Left} from 'react-icons/ai'
import {AiOutlineArrowRight as Right} from 'react-icons/ai'

function Carousel(){
    let [Image, setImage] = useState('')
    let [Index, setIndex] = useState(0)
    let [Text, setText] = useState('')
    let [Title, setTitle] = useState('')
    let[color, setColor] = useState('')
    function change(){
        if(Index === 0){
            setImage('http://localhost:3000/images/Banner_1.png')
            setTitle('Akha Coffee')
            setText('😊From plant to Product, we are always there😊')
            setColor('var(--mainCol)')
            // console.log('First If working')
            // Index++
            // console.log(index)
        }else if(Index === 1){
            setImage('http://localhost:3000/images/Banner_2.png')
            setTitle('Visit Our Shop')
            setText('💖We put time and love in every cup of coffee💖')
            setColor('var(--yellow)')
            // console.log('Second If working')
            // index++
            // console.log(index)
        }else if(Index === 2){
            setImage('http://localhost:3000/images/Banner_3.png')
            setTitle('Top Quality')
            setText('🌱Try our Product Line🌱')
            setColor('var(--lightPurple)')
            // console.log('Third if is Working')
            // index = 0
            // console.log(index)
        }
    }
    const handleClickNext = event =>{
        setIndex(Index + 1)
        if(Index>=2){
            setIndex(0)
        }
    }
    const handleClickPrev = event =>{
        setIndex(Index - 1)
        console.log('prev btn working')
        if(Index===0){
            setIndex(2)
        }
    }
    useEffect(()=>{
        let interval = setInterval(() =>{handleClickNext()}, 2000);
        
        change()
        console.log('Use Effect Working')
        return ()=>{
            clearInterval(interval);
        };
    })
    const btn = {
        width: '50px',
        height:'100px',
        backgroundColor: 'var(--translucentBlue)',
        // backgroundColor: '#FCF1D8',
        border: 'none',
        // fontFamily: 'Arial'
        fontWeight:'bold',
        // color:'#8DA290',
        margin:'1rem',
        borderRadius: '20px',
        transform: 'scale(1.2)'

    }
    return(
        <div className="Carousel" style={{
            
        }}>
        <div className="panel" style={{
            displaye: 'flex',
            justifyContent: 'space-between',
            backgroundImage: `url(${Image})`,
            //backgroundColor:'lightblue',
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: '.5s',
            alignItems: 'center',
            backgroundColor:`${color}`
            
            // backgroundColor: 'red'
        }}>
            <button style={btn} onClick={handleClickPrev} ><Left className="icon" size={20}/></button>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    // padding:'10px',
                    alignItems:'center',
                    width: '30%',
                    height: '400px',
                    backgroundColor:'var(--translucentBlue)',
                    borderRadius:'20px',
                    color: 'white',
                    transition:'.5s',
                }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:'center',
                    }}>

                    <h1 style={{
                        textAlign:'center'
                        }}>{Title}</h1>
                    <h2 style={{
                        textAlign:'center'
                        }}>{Text}</h2>
                    </div>
                </div>
            <div></div>
                <div>
            
                {/* {<iframe title="map" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8986.593001544306!2d98.94993909794961!3d18.73579952945463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a486a080d0c744c!2sAkha%20Coffee%20Roaster!5e0!3m2!1sen!2sth!4v1663516981450!5m2!1sen!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>} */}
                {/* <button>View Map</button> */}
                </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <button style={btn} onClick={handleClickNext}><Right className="icon" size={20}/></button>
        </div>
        {/* <img src={Image}></img> */}
        </div>
    )
}

export default Carousel