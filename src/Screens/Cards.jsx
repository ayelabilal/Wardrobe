import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";   
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Cards({ image, title, desc, id }) {
  const navigate = useNavigate();      
  return (
    <div className="cards">
    <Card sx={{width:"350px",height:"400px",marginTop:"20px",boxShadow:"0 0 10px gray",borderRadius:"15px"}}>   
      <CardMedia sx={{ height: 140, boxSizing:"border-box" }} image={image} title="green iguana" />
      <CardContent>   
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{width:"650px"}} variant="body2" color="text.secondary">
          {desc}
        </Typography>   
      </CardContent>   
      <CardActions>
        <Button
        sx={{margin:"auto"}}
          onClick={() => navigate(`/product/${id}`)}   
          variant="contained"  
          color="primary"
          size="small"
          >
          Add
        </Button>
      </CardActions>
    </Card>
            </div>
  );
}