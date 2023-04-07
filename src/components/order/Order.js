import React from "react"
import './order.css'
import Item from './Item'


const data = [
    {
        img:"https://images.pexels.com/photos/4815899/pexels-photo-4815899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"ABC Coffee Inc",
        amount:"18",
        date:"18/4/2023",
        address:"101/111 Chaign Mai, City, Thailand 50600",
        type:"Green Bean ",
    },
    {
        img:"https://images.pexels.com/photos/4815899/pexels-photo-4815899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"ABC Coffee Inc",
        amount:"18",
        date:"18/4/2023",
        address:"101/111 Chaign Mai, City, Thailand 50600",
        type:"Green Bean ",
    },

    {
        img:"https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"ABC Coffee Inc",
        amount:"18",
        date:"18/4/2023",
        address:"101/111 Chaign Mai, City, Thailand 50600",
        type:"Dark Roast ",
    },
    {
        img:"https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"ABC Coffee Inc",
        amount:"18",
        date:"18/4/2023",
        address:"101/111 Chaign Mai, City, Thailand 50600",
        type:"Medium Roast ",
    },
]


function Order(){
    const listItems = data.map(item=><Item data={item}/>)
    return(
        <div className="o-con">
            <div>
                {/* <h1>Order Dashboard</h1> */}
            </div>
            <div className="form-c">
            <h1>Order</h1>
                <form className="panel-o">
                <img alt="logo" style={{
                    width:"150px",
                    cursor:'pointer'
                }} src={'/Akha-Coffee-Demo/images/logo.png'}></img>
                    <br></br>
                    <fieldset className="field">
                    <h3>Type of Order</h3>
                    <br></br>
                    <label><input type="radio" name="radio" value="Green Bean (Whole Sale)" /> Green Bean (Whole Sale)</label>
                    <br></br>
                    <label><input type="radio" name="radio" value="Dark Roast" /> Dark Roast</label>
                    <br></br>
                    <label><input type="radio" name="radio" value="Medium Roast" /> Medium Roast</label>
                    <br></br>
                    <label><input type="radio" name="radio" value="Gold Roast" /> Gold Roast</label>
                    <br></br>
                    <label><input type="radio" name="radio" value="Seedling Sale" /> Seedling</label>
                    </fieldset>
                    <br></br>
                    <fieldset className="field">
                        <h3>Name of Company</h3>
                        <ul>
                            <li>
                        <label>Amount in Kilogram:</label>

                            </li>
                            <li>
                        <input className="i" type="text"></input>
                            </li>
                        </ul>
                    </fieldset>
                    <br></br>
                    <fieldset className="field">
                        <h3>Amount</h3>
                        <ul>
                            <li>
                        <label>Amount in Kilogram:</label>

                            </li>
                            <li>
                        <input className="i" type="number"></input>
                            </li>
                        </ul>
                    </fieldset>
                    <br></br>
                    <fieldset className="field">
                        <h3>Address</h3>
                        <ul>
                            <li>
                        <label>Address/location:</label>

                            </li>
                            <li>
                        <input className="i" type="text"></input>

                            </li>
                        </ul>
                    </fieldset>
                    <input className="s" type="submit"></input>
                </form>
            </div>
            <div>
            <div className="form-c">

            <h1>Orderd Items</h1>
            {/* <Item/> */}
            {listItems}
            </div>
            </div>
        </div>
    )
}


export default Order