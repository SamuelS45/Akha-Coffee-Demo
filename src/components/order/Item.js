import React from "react"
import {AiFillEdit as Edit} from 'react-icons/ai'
import {AiFillDelete as Delete} from 'react-icons/ai'
import './item.css'


function Item({data}){
    const{img,name,amount,date,address,type} = data
    return(
        <div className="item">
            <div className="img-c">
            <img style={{
                width:'150px'
            }} src={img} alt={img.toString}></img>
            </div>
            <div className="list">
            <h2>Company: {name}</h2>
            <h5>Type: {type}</h5>
            <h5>Amount: {amount} Kg</h5>
            <h5>Adresss: {address}</h5>
            <h5>Ordered on: {date}</h5>
            </div>
            <buttton style={{
                backgroundColor:'lightblue'
            }} className='i-btn'><Edit/></buttton>
            <buttton style={{
                backgroundColor:'lightcoral'
            }} className='i-btn'><Delete/></buttton>
        </div>
    )
}

export default Item