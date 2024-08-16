import React, { useEffect, useState } from 'react';
import logo1 from '../assets/Logo-Black.png'
import { useParams } from 'react-router-dom';
import logo from '../assets/logo.png'

const Product = () => {
    const home=()=>{
        window.location.href='/'
    }

    const { id } = useParams();
   
  const [singleData, setSingleData] = useState([]);   

  useEffect(() => {
    getSingleData();   
  }, []);

  const getSingleData = async () => {
    const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);   
    const response = await fetchData.json();   

    setSingleData([response]);        
  };
  const about =()=>{
    window.location.href='/about'
  }
  return (
    <div>
      <div className='secMain'>
      <img onClick={home}
          style={{ paddingTop: "50px", paddingLeft: "50px"}}
          src={logo1}
          alt=""
        />
         <div style={{ marginLeft: "220px" }}>
          <button className="home" onClick={home}>
            <u>Home</u>
          </button>
          <button className="product">
            <u>All Product</u>
          </button>
          <button className="about" onClick={about}>
            <u>About Us</u>
          </button>
        </div>
      </div>

      <div className='product2'>
        
        <h2 className='pro'><u>SELECT PRODUCT</u></h2>

        <div>   
            {singleData?.map((e, i) => {
        return (
          <div key={i} className='single1'>
            <img className='single' src={e.image} alt="" />   
            <h1>{e.title}</h1>
            <h1 className='des'>{e.description}</h1>   
          </div>
        );
      })}
    </div>
      </div>

      <div>
      <div className="last">
        <img
          style={{ paddingTop: "80px", paddingLeft: "50px" }}
          src={logo}
          alt=""
        />
        <p
          style={{
            width: "170px",
            paddingTop: "50px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
            fontSize: "16px",
          }}
        >
          Transform your style with OnlineWardrobe - where fashion meets
          elegance. Discover the latest trends and timeless classics to elevate
          your wardrobe every day.
        </p>

        <div className="li">
          <ul className="quick">
            <li className="tops">Quick Links</li>
            <li className="lis">Home</li>
            <li className="lis">All Products</li>
            <li className="lis">About us</li>
          </ul>
          
          <ul className="quick"> 
          <li className="tops" >Shop Collections</li>
          <li className="lis">Men's Jeans</li>
          <li className="lis">Women Tops</li>
          <li className="lis">Hodies</li>
          <li className="lis">Jackets</li>
          </ul>

          <ul className="quick"> 
          <li className="tops">Shop Collections</li>
          <li className="lis">Men's Jeans</li>
          <li className="lis">Women Tops</li>
          <li className="lis">Hodies</li>
          <li className="lis">Jackets</li>
          </ul>

          <ul className="quick"> 
          <li className="tops">Shop Collections</li>
          <li className="lis">Men's Jeans</li>
          <li className="lis">Women Tops</li>
          <li className="lis">Hodies</li>
          <li className="lis">Jackets</li>
          </ul>

        </div>
      </div>
      <div>
        <p className="copy">Copy right @ 2024 online wardrobe</p>
      </div>
      </div>
     
    </div>
  )
}

export default Product