import React from 'react'
import { compareAsc, format } from 'date-fns'
export const OrderItemCard = (props) => {
const {dateTimeStamp, items} =props.order



let orderAmount=0
  return (
    <>
    <div className='_orderHistoryCard' >
        <h3>{format(new Date(dateTimeStamp), 'dd, MMM yyyy (kk:mm:ss)')}</h3>
        {[...items]?.map(ele=><div>
            <div ><p  >{ele.title}</p></div><div><p>₹ {ele.price} /-</p></div><div><p>{ele.count}</p></div><div>Total ₹ {orderAmount+=(ele.count*ele.price)}/- </div>
            
        </div>)}
    </div>
    <div style={{display:"flex", width:"800px", justifyContent:"space-between",padding:"2px 10px 2px 10px" }}><h2>Total Order Value </h2><h2>₹ {orderAmount}/-</h2></div>
    </>
  )
}

