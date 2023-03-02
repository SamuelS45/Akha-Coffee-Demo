import React from "react"
import LoremIpsum, { loremIpsum } from "react-lorem-ipsum"
const ProductData = [
    {
        img: '/Akha-Coffee-Demo/images/Dark.png',
        title:'Dark Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Set of Yellow Shovels</li>'
    },
    {
        img: '/Akha-Coffee-Demo/images/MediumRoast.png',
        title:'Medium Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>A Hipster Yellow Watering Can</li>'
    },
    {
        img: '/Akha-Coffee-Demo/images/GoldRoast.png',
        title:'Gold Roast',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>An Orange Clay Pot (Plant Not Included)</li>'
    },
    {
        img: '/Akha-Coffee-Demo/images/Roasting.png',
        title:'Whole Sale',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
    {
        img: '/Akha-Coffee-Demo/images/coffee.png',
        title:'Seedlings',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
    {
        img: '/Akha-Coffee-Demo/images/Parn.png',
        title:'Training',
        text: <LoremIpsum p={1}/>,
        btnName:'Add to Cart',
        value: '<li>Bird Box Garden Decoration</li>'
    },
]


export default ProductData