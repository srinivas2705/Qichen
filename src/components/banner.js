import {Component} from "react";
import "../styles/banner.css";
import {ArrowDownOutlined} from "@ant-design/icons";

class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <div className="bannertext">
                    <h1>Crispy</h1>
                    <h1>Chicken</h1>
                    <h1>Burgers</h1>
                    <p className="bannertext1">Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
                    <p><ArrowDownOutlined /><button>ORDER NOW</button></p>
                </div>
                <div className="bannerimg">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/hero/hero-1.jpg" alt="burger"></img>
                </div>
            </div>
        )
    }
}

export default Banner;