import React from "react"
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum"
const ProductData = [
    {
        img: 'http://localhost:3000/images/Dark.png',
        title:'Dark Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Set of Yellow Shovels</li>'
    },
    {
        img: 'http://localhost:3000/images/MediumRoast.png',
        title:'Medium Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>A Hipster Yellow Watering Can</li>'
    },
    {
        img: 'http://localhost:3000/images/GoldRoast.png',
        title:'Gold Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>An Orange Clay Pot (Plant Not Included)</li>'
    },
    {
        img: 'http://localhost:3000/images/Roasting.png',
        title:'Whole Sale',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
    {
        img: 'http://localhost:3000/images/coffee.png',
        title:'Seedlings',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
    {
        img: 'http://localhost:3000/images/Parn.png',
        title:'Training',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
]


export default ProductData