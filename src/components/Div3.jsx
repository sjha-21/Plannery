import React from "react";
import div3 from "../assets/div3.jpg";
import "../styles/Div3.css";
import { Button, Space } from "antd";

const Div3 = () => {
  return (
    <div className="imagediv3">
      <img src={div3} alt="Image" className="image3" />

      <div className="textdiv3">
        <h3>
          Effortlessly generate, customize, and save comprehensive lesson plans
          aligned with specific criteria, enhancing teaching efficiency and
          enabling future use!!
        </h3>
      
      <Button type="link" size="large"  className="generate-btn" style={{marginLeft:"310px"}} >
        Generate
      </Button>
      </div>
    </div>  );
};

export default Div3;
