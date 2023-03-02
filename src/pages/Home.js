import React from "react";
import Carousel from "../components/Carousel";
// import Dropdown from "../components/Dropdown";
import ListDropdown from "../components/Dropdown Menu/ListDropdown";
import './CSS/home.css'
import Card from '../components/Card/Card'
import { LoremIpsum } from "react-lorem-ipsum";
import { useNavigate } from "react-router-dom";


function Home(){
    let navigate = useNavigate('')
    return(
        <>
        <Carousel/>
        <div className="panel" style={{
                    display:'flex',
                    // flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    margin:'1rem',
                    }}>    
            <Card
                    title='Coffee is all about passion'
                    src='http://localhost:3000/images/Parn.png'
                    
                    text= {<LoremIpsum p={1}/>} //lorem ipsum causes error in domNesting
                    name='Product'
                    alt='planting and pot'
                    onClick= {()=>navigate('/products')}
            />
            <div  style={{
                        width: '80%',
                        borderRadius:'20px',
                        margin:'2rem',
                        }}>
                {/* <Dropdown/> */}
                {/* <h1>FAQ about gardening and Farming</h1> */}
                <ListDropdown/>
            </div>
        </div>
        {/* <div className="panel"></div> */}
        </>
    )
}

export default Home