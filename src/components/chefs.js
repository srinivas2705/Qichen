import { Component } from "react";
import "../styles/chefs.css";
import {CheckCircleTwoTone, ArrowRightOutlined} from "@ant-design/icons";

class Chefs extends Component{
    render(){
        return(
            <div className="chefsinfo">
                <div className="chefstext"> 
                    <h3>Best Food Menu</h3>
                    <h1>Meet Our Exclusive & Master Chefs</h1>
                    <p> <CheckCircleTwoTone />    25 Years of Experience in Restaurant Services in USA</p>
                    <p><CheckCircleTwoTone />    Any Kind Of Food Made For Customer and So Much Yamee $ Testy</p>
                    <p id="one">Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <button>BECOME A CHEF <ArrowRightOutlined /></button>
                </div>
                <div className="imggrid">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-1.jpg" alt="pic1"></img>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-2.jpg" alt="pic2"></img>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-3.jpg" alt="pic3"></img>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-4.jpg" alt="pic4"></img>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-5.jpg" alt="pic5"></img>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-6.jpg" alt="pic6"></img>
                </div>
            </div>
        )
    }
}

export default Chefs;