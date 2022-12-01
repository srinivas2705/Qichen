import {Component} from "react";
import {ArrowRightOutlined} from "@ant-design/icons";
import "../styles/footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="footer"> 
                <div className="footerimg">
                    <img src="https://demo.webtend.net/html/qichen/assets/images/logo/logo-white.png" alt="logo"></img>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris adipis</p>
                    <input type="text" placeholder="Email Address" />
                </div>
                <ul type="none">
                    <h4>About Company</h4>
                    <li>Home Shop</li>
                    <li>Our Menu(CMS)</li>
                    <li>Shop(Ecom)</li>
                    <li>Receipes</li>
                    <li>Spices</li>
                </ul>
                <ul type="none">
                    <h4>Products</h4>
                    <li>Hamburger</li>
                    <li>Chicken Burger</li>
                    <li>Vegetable Pizza</li>
                    <li>Chicken Roll</li>
                    <li>Ice Cream</li>
                </ul>
                <ul type="none">
                   <h4></h4>
                   <li className="potato">Potato</li> 
                   <li>Orange Juice</li> 
                   <li>Lemon Juice</li> 
                   <li>Mutton Tikka</li> 
                   <li>Sea Foods</li> 
                </ul>

                <ul type="none" id="call">
                     <h4>Call for Order:</h4>
                     <li id="number">+1 2586 5892</li>   
                    <li>hello@example.com</li>
                    <h4>Location:</h4>
                    <li id="address">119 Tanglewood Lane Gulfport, MS 39503</li>
                </ul>
            </div>
        )
    }
}

export default Footer;