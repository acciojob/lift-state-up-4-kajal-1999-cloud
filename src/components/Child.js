import React from "react";

const Child =({items,removeItem})=>{

    return (
        <div className="child">
            <h1>Child Component</h1>
           <ul>
            {
                items.map((item)=>(
                    <li>
                        <span>{item.itemName} - </span>
                        <span>${item.itemPrice}</span>
                        <button onClick={()=>removeItem(item.id)}>Remove</button>
                    </li>
                ))
            }
           </ul>
        </div>
    )
}
export default Child