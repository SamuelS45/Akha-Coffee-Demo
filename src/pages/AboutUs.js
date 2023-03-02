import React from "react";
import {LoremIpsum} from "react-lorem-ipsum";
import Card from '../components/Card/Card'

function AboutUs(){
    return(
        <div style={{
            display:'flex'
        }}>
        <Card
        title='About US'
        src='https://images.pexels.com/photos/6231740/pexels-photo-6231740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        text={<LoremIpsum p={1}/>}
        name='Hi'
        />
        <Card
        title='Vision'
        src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        text={<LoremIpsum p={1}/>}
        name="Yes"
        />
        </div>
    )
}

export default AboutUs