import React, { useState } from "react";
import {Button,Pagination} from 'antd'
import "../nav/nav.css"
import logo from "../nav/logo.png";
import {SearchOutlined,BellFilled} from '@ant-design/icons';


function Nav(){

    const [loading,setLoading] = useState(false);


    const OnclickButton = ()=> {

        setLoading(true)

        setTimeout(()=> {

            setLoading(false);

        },2000);

    }

return(

<>

    <div className="navbar flex bg-black h-20 items-center">
        
        <img src={logo} alt="" className="h-10 ml-10" />
        <div className="navbar-list ml-12">

        <ul className="flex gap-10 text-white  justify-center ml-10 font-semibold">
                <li>Home</li>
                <li>Page</li>
                <li>Movies</li>
                <li>Page</li>
                <li>Contect</li>
        </ul>

        </div>

        <div className="flex gap-10 seach-button ml-auto mr-24">

            <Button type="primary" shape="circle"   className="!bg-red-700 !border-red-700 " icon={<SearchOutlined></SearchOutlined>}></Button>

            <Button type="primary"shape="circle" className="!bg-red-700 !border-red-700" icon={<BellFilled/>}></Button>

            <Button type="primary" className="!bg-red-700">Subscribe Now</Button>

        </div>
       

        
    </div>

</>

)

}


export default Nav