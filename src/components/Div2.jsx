import React from "react";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import div2 from "../assets/div2.jpg";
import "../styles/Div2.css";

const Div2 = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGenerateClick = () => {
    // navigate('/create'); // Navigate to /create route
  };

  return (
    <div className="imagediv2">
      <div className="textdiv2">
        <h3>
          Effortlessly generate, customize, and save comprehensive lesson plans
          aligned with specific criteria, enhancing teaching efficiency and
          enabling future use!!
        </h3>
        <Button
          type="link"
          size="large"
          style={{ marginLeft: "310px" }}
          className="generate-btn"
          onClick={handleGenerateClick} 
        >
          Generate
        </Button>
      </div>
      <img src={div2} alt="img" className="image2" />
    </div>
  );
};

export default Div2;
