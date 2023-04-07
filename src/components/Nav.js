import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "./Button";
import '../style.css'
import { useNavigate } from "react-router-dom";

function Nav(){
    let navigate = useNavigate('')
    return(
        <>
        <div className="nav">
            <button style={{
                background: 'none',
                border:'none'
            }
            } onClick={()=>navigate('/')}>
                <img alt="logo" style={{
                    width:"150px",
                    cursor:'pointer'
                }} src={'/Akha-Coffee-Demo/images/logo.png'}></img>
            {/* <h1>Akha Coffee</h1> */}
            </button>
        <ul className="nav-ul">
            <li className="nav-li"><NavLink className={({isActive})=>(isActive?'link-active':'nav-link')} to='/'><h2>Home</h2></NavLink></li>
            <li className="nav-li"><NavLink className={({isActive})=>(isActive?'link-active':'nav-link')} to='/about'><h2>About Us</h2></NavLink></li>
            <li className="nav-li"><NavLink className={({isActive})=>(isActive?'link-active':'nav-link')} to='/products'><h2>Products</h2></NavLink></li>
            <li className="nav-li"><NavLink className={({isActive})=>(isActive?'link-active':'nav-link')} to='/order'><h2>Dashboard</h2></NavLink></li>
        </ul>
        <Button
        name='Log In'
        // onClick ={()=>navigate('/login')}
        onClick ={()=>navigate('/loginh')}
        />
        </div>
        <Outlet/>
        </>
    )
}


export default Nav