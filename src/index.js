import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import LogIn from "./pages/LogIn";
import {HashRouter, Route, Routes} from 'react-router-dom'
import './style.css'
import Footer from "./components/Footer";
import LogInH from "./pages/LogInH";
// import Menu from "./components/Menu";
// import ListMenu from "./components/ListMenu";
// import Timer from "./TImerClass";
// import TimerHooks from "./TimerHooks";


// const ids = [1,2,3,4,5]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <HashRouter>
    <Nav/>
    {/* <hr></hr> */}
        <Routes>
            <Route exact path ='/' element={<Home/>}/>
            <Route path ='/about'element={<AboutUs/>}/>
            <Route path ='/products'element={<Products/>}/>
            <Route path ='/login'element={<LogIn/>}/>
            <Route path ='/loginh'element={<LogInH/>}/>
        </Routes>
    </HashRouter>
    <Footer/>
    {/* <hr></hr> */}
    {/* <h1>Hello World</h1> */}
    {/* <ListMenu ids={ids}/> */}
    {/* <Timer/> */}
    {/* <TimerHooks/> */}
    </>
)
