import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "../styles/Navbar.css"; // Import your custom CSS for styling

const Navbar = () => {
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
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="services" icon={<AppstoreOutlined />}>
          Services
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
         <link to="/contact"/> Contact<lnk/>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
