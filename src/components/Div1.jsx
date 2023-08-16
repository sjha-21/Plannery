import React from "react";
import div1 from "../assets/div1.jpg";
import "../styles/Div1.css";
import { Button, Space } from "antd";
import {useNavigate} from "react-router-dom"


const Div1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Button clicked!');
    navigate('/create');
  };
  return (
    <div className="imagediv1">
      <img src={div1} alt="Image" className="image1" />

      <div className="textdiv1">
        <h3>
          Effortlessly generate, customize, and save comprehensive lesson plans
          aligned with specific criteria, enhancing teaching efficiency and
          enabling future use!!
        </h3>
      
      <Button type="link" onClick={handleClick} size="large" className="generate-btn" style={{marginLeft:"310px"}}>
        Generate
      </Button>
      </div>
    </div>
  );
};

export default Div1;
