import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import '../styles/home.css'
import Cart from './Cart'
import { useState } from 'react'
import products from '../components/data'
const Home = () => {
  const[isClicked,setIsClicked]=useState(false)
  const[data,setData]=useState(products)
  const[filtereddata,setFilteredData]=useState(null)
 const shopingData=(id)=>{
  const filteredData=data.filter((dt)=>dt.id===id);
  setFilteredData((prevState)=>{
    return {...prevState,filteredData}
  })
 }

  return (
    <div className="container">
      <div className='navbar'>
        <div className="left-navbar">
          <h3>Products</h3>
        </div>
        <div className="right-navbar">
            <button onClick={()=>{setIsClicked(!isClicked)}}>
               <BsFillCartPlusFill />
               My Cart
            </button>
        </div>
      </div>   
      <div className="outer-cover">
        <h2>Our Products</h2>
        <div className="card-cover">
         {
          data && data.map((dt)=>{
            const{id,image,name,price}=dt;
            return <div className="card" key={id}>
             <div className="card-header">
               <img src={image} alt=""/>
             </div>
             <div className="card-body">
              <div className="card-name">
                <h3>{name}</h3>
              </div>
              <div className="card-price">
                <h4>{price}</h4>
              </div>
             <div className="shoping-cart" onClick={()=>{shopingData(id)}}>
                <BsFillCartPlusFill />
             </div>
             </div>
            </div>
          })
         }
        </div>
      {
        isClicked && <Cart filtereddata={filtereddata} />
       }
      </div>
    </div>
  )
}

export default Home