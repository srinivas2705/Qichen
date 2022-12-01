import React, { Component } from "react";
import {DownOutlined, ArrowRightOutlined, SearchOutlined} from "@ant-design/icons";
import "../styles/header.css";

class Header extends Component{
    render(){
        return(
            <div className= "qichen">
                <div className="qichenlogo">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/logo/logo-white.png" alt="logo"></img>
                    <ul type="none" className="ulqichen">
                        <li>Home <DownOutlined /></li>
                        <li>Menu <DownOutlined /></li>
                        <li>About</li>
                        <li>Shop <DownOutlined /></li>
                        <li>Blog <DownOutlined /></li>
                        <li>Pages <DownOutlined /></li>
                        <li><SearchOutlined /></li>
                    </ul>
                </div>
                <div className="qichen2">
                    <p className="textqichen2"><img src="https://demo.webtend.net/html/qichen/assets/images/call.png"></img><span>000 (123) 456 89</span></p>
                    <button className="buttonqichen2">BOOK A TABLE <ArrowRightOutlined /></button>
                </div>
            </div>
        )
    }
}

export default Header;