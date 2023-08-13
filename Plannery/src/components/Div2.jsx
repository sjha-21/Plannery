import React from "react";
import div2 from "../assets/div2.jpg";
import "../styles/Div2.css";
import { Button, Space } from "antd";

const Div2 = () => {
  return (
    <div className="imagediv2">
      <div className="textdiv2">
        <h3>
          Effortlessly generate, customize, and save comprehensive lesson plans
          aligned with specific criteria, enhancing teaching efficiency and
          enabling future use!!
        </h3>
        <Button type="link" className="generate-btn">
          Generate
        </Button>
      </div>
      <img src={div2} alt="img" className="image2" />
    </div>
  );
};
export default Div2;
