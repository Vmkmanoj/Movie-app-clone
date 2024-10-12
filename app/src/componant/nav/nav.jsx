import React, { useState } from "react";
import { Button } from 'antd';
import { SearchOutlined, BellFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "../nav/nav.css";
import logo from "../nav/logo.png";

function Nav(props) {


  return (
    <div className="navbar flex bg-black h-20 items-center">
      <img src={logo} alt="Website Logo" className="h-10 ml-10" />
      
      <div className="navbar-list ml-12">
        <ul className="flex gap-10 text-white justify-center ml-10 font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page">Page</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/another-page">Another Page</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="flex gap-10 search-button ml-auto mr-24">
        <Button 
          type="primary" 
          shape="circle" 
          className="!bg-red-700 !border-red-700" 
          icon={<SearchOutlined />} 
        />
        <Button 
          type="primary" 
          shape="circle" 
          className="!bg-red-700 !border-red-700" 
          icon={<BellFilled />} 
        />
        <Button 
          type="primary" 
          className="!bg-red-700 font-semibold"
        >
          Subscribe Now
        </Button>
      </div>

      <h1>{props.ele}</h1>
    </div>
  );
}

export default Nav;
