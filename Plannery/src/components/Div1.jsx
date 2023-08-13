import React from "react";
import div1 from "../assets/div1.jpg";
import "../styles/Div1.css";
import { Button, Space } from "antd";

const Div1 = () => {
  return (
    <div className="imagediv1">
      <img src={div1} alt="Image" className="image1" />

      <div className="textdiv1">
        <h3>
          Effortlessly generate, customize, and save comprehensive lesson plans
          aligned with specific criteria, enhancing teaching efficiency and
          enabling future use!!
        </h3>
      
      <Button type="link" className="generate-btn">
        Generate
      </Button>
      </div>
    </div>
  );
};

export default Div1;
