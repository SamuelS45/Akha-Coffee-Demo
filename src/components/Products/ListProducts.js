import React, {useEffect, useState} from "react";
import './card.css'
// import Button from "./Button";
import ProductData from './ProductData'
import axios from "axios";
import { useNavigate } from "react-router";
function Card(props){
    const navigate = useNavigate()
    return(
        <>
        <div className="container">
            <div className="card-product" 
            style={{
                    display:'flex',
                    justifyContent:'flex-end',
                    backgroundImage: `url(${props.src})`,
                    backgroundPosition:'center'
                    }}>
                <div className="info">
                <h1 style={{textAlign:'center',margin:'2rem',color:props.color}}>{props.title}    </h1>
                <div className="price">
                <span style={{textAlign:'center',margin:'1rem',color:props.color}}>{props.price}    </span>
                <span style={{textAlign:'center',margin:'1rem',color:props.color}}>{props.weight}   </span>
                <span style={{textAlign:'center',margin:'1rem',color:props.color}}>{props.unit}     </span>
                </div>
                {/* <img alt={props.alt} style={{
                width: '10rem',
                borderRadius:'10px'

                }} src={props.src}>
                </img> */}

                <span style={{margin:'1rem', overflow:"auto",}}>
                <p>
                    {props.text}
                </p>
                </span>
                    <div className="btn-container">

                    <button onClick={()=>{navigate('/order')}} className="btn" value={props.value}>{'Order'}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

function ListProducts(){
    let[data, setData]= useState([])
    // let[cartItems, setCartItems] = useState([])
    // const addItem=(e)=>{
    //     let items = {e}
    //     setCartItems(cartItems+=" "+e+" ");
    // }
    useEffect(()=>{
        axios.get('http://localhost:3000/products').then(res=>setData(res.data))
    },[])
    const listProducts = ProductData.map((item)=><Card 
    key={item.title} 
    src={item.img} 
    title={item.title} 
    text={item.text} 
    name={'More Info'}/>)
    return(
        <>
            {/* <div className="cart">
                <h1>Items in Cart: </h1>
                <div className="items">

                <ol>
                    {cartItems}
                </ol>
                </div>
                <button className="btn-checkout">Check Out</button>
            </div> */}
        <div style={{
            display:'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            // alignItems:'center',
            width:'100%',
            // transform: 'scale(.5)'
                    }}>
            {listProducts}
        </div>
        
        </>
    )
}

export default ListProducts