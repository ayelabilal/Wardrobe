import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { productData } from "./Data";
import Cards from "./Cards";
import axios from "axios";
import { GrDeliver } from "react-icons/gr";
import { MdDiscount } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import './src/App.css';
const Home = () => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getApiData();
  });

  const getApiData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };

  console.log(productData);

  const product=()=>{
    window.location.href ='/product/:id'
  }
  const aboutus =()=>{
    window.location.href='/about'
  }
  return (
    <div>
      <div className="main">
        <img
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
          src={logo}
          alt=""
        />
        <div style={{ marginLeft: "220px" }}>
          <button className="home">
            <u>Home</u>
          </button>
          <button className="product" onClick={product}>
            <u>All Product</u>
          </button>
          <button className="about" onClick={aboutus}>
            <u>About Us</u>
          </button>
        </div>

        <div>
          <h3 className="summer">Summer Collection</h3>
          <br />
          <h3 className="intro">Introducing New Arrivals</h3>
          <br />
          <h4 className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </h4>
          <br />
          <button className="view">VIEW COLLECTION</button>
        </div>
      </div>

      <div>
        <h3 className="shoping">Shopping is cheaper than therapy.</h3>
        <h3 className="online">------------------ Online Wardrobe</h3>
      </div>
      <div className="line"></div>

      <div>
        <h1 className="featured">Featured Products</h1>
        {productData.map((e, i) => {
          return (
            <div key={i} style={{ display: "inline-block" }}>
              <Cards
                id={e.id}
                title={e.title}
                image={e.image}
                desc={e.description}
              />
            </div>
          );
        })}
      </div>

      <div>
        <button className="btn">
          <p className="truck">
            <GrDeliver />
          </p>{" "}
          Express Delivery
        </button>
        <button className="btn">
          <p className="truck">
            <FaLocationDot />
          </p>
          Order Tracking
        </button>
        <button className="btn">
          {" "}
          <p className="truck">
            <MdDiscount />
          </p>
          Regular Discounts
        </button>
      </div>

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
  );
};

export default Home;
