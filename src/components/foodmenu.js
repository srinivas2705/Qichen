import {Component} from "react";
import Foodmenus from "../components/foodmenus";
import "../styles/foodmenu.css";
const data = [
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/menu/thumb-1.png",
        text: "Hamburger......................................................$25",
        text1: "Roasted langoustine, consommé",
        text2: " (5k Reviews)"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/menu/thumb-2.png",
        text: "Pizza..........................................................$63",
        text1: "Roasted langoustine, consommé",
        text2: " (5k Reviews)"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/menu/thumb-3.png",
        text: "Baked Chicken Wings...........................................$199",
        text1: "Roasted langoustine, consommé",
        text2: " (5k Reviews)"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/menu/thumb-4.png",
        text: "Seafood Pizza.................................................$352",
        text1: "Roasted langoustine, consommé",
        text2: " (5k Reviews)"
    }
]


class Foodmenu extends Component {
    constructor() {
        super();
        this.state = {
            value: data
        }
    }
    render() {
        return (
            <div className="foodmenu">
                <h3>BEST FOOD MENU</h3>
                <h1>Choose Your Best Menus</h1>
                <section className="foodmenuimg">
                <img src="https://demo.webtend.net/html/qichen/assets/images/menu/menu-single-1.jpg" alt="food"></img>
                <div>
                {this.state.value.map(e => (
                    <Foodmenus data={e} />
                ))
                }
                 </div>
                 </section>
            </div>
        )
    }
}

export default Foodmenu;