import React from "react";
import {useNavigate} from "react-router-dom"
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "../styles/Navbar.css"; 
const { SubMenu } = Menu;


const Navbar = () => {
const navigate=useNavigate();
const handleclick=()=>{
  navigate('/create');
}
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Plannery</span>
      </div>
      <Menu
        mode="horizontal"
        className="menu"
        theme="light"
        style={{ borderBottom: "0px" }}
      >
        <Menu.Item key="home" className="home-nav"icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about" className="about-nav" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
        <SubMenu key="services"  className="services-nav"icon={<AppstoreOutlined />} title="Services">
          <Menu.Item  className="generatedropdown" onClick ={handleclick}key="service1">Generate lesson plan</Menu.Item>
          <Menu.Item className="insightsdropdown" key="service2">Insights</Menu.Item>
          <Menu.Item  className="thinkdropdown"key="service3">Think outside the box</Menu.Item>
        </SubMenu>
        <Menu.Item key="contact" className="contact-nav" icon={<ContactsOutlined />}>
         <link to="/contact"/> Contact<lnk/>
        </Menu.Item>
      </Menu>
      <div className="logo"></div>
    </div>
  );
};

export default Navbar;
