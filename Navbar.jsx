import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, AppstoreOutlined, ContactsOutlined } from '@ant-design/icons';
import './Navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        
        <span className="logo-text">Plannery</span>
      </div>
      <Menu mode="horizontal" className="menu" theme="light">
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
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
