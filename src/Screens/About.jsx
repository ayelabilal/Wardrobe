import React from "react";
import logo from "../assets/logo.png";
import shirt from "../assets/shrt.png";
import discount from "../assets/discount.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { GrDeliver } from "react-icons/gr";
import { MdDiscount } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
const About = () => {
  const home = () => {
    window.location.href = "/";
  };
  const product = () => {
    window.location.href = "product/:id";
  };
  return (
    <div>
      <div className="main3">
        <img
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
          src={logo}
          alt=""
        />
        <div style={{ marginLeft: "220px" }}>
          <button className="home" onClick={home}>
            <u>Home</u>
          </button>
          <button className="product" onClick={product}>
            <u>All Product</u>
          </button>
          <button className="about">
            <u>About Us</u>
          </button>
          <h1 className="aboutus">ABOUT US</h1>
        </div>
      </div>

      <div className="shirts">
        <div>
          <img className="shrt" src={shirt} alt="" />
          <h3 className="sale">Latest Trends For All</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div>
          <img className="discount" src={discount} alt="" />
          <h3 className="sales">Sale on latest fashion</h3>
          <p className="para1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
      </div>

      <div className="line"></div>

      <div>
        <h5 className="love">They Love Us!!!</h5>
        <p className="para2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      <div className="cards6">
        <Card sx={{  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Men's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img2}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Women's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img3}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Men's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>

        <div className="cards6">
        <Card sx={{  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img4}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Men's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img5}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Women's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img6}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Women's Collection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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

export default About;
