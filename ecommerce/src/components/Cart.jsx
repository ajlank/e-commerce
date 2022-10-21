import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import '../styles/cart.css'
const Cart = ({filtereddata}) => {
  const[data,setData]=useState([])
   useEffect(()=>{
    setData(filtereddata)
   },[filtereddata])
    

   
  return (
    <div className="cart-container">
      <h1>cart is empty</h1>
      <div className="inner-cart-container">
      {
        filtereddata && filtereddata.map((fd)=>{
          console.log(fd)
        })
      }
      </div>
    </div>
  )
}

export default Cart