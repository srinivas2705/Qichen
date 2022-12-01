import { Component } from "react";
import Popularfoodcourt from "../components/popularfoodcourt.js";
import "../styles/popularfoodcourt.css";

const data = [
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-1.png",
        text: "Pizza"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-2.png",
        text: "Burger"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-3.png",
        text: "Bread"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-4.png",
        text: "Seafoods"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-5.png",
        text: "Coffee"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-6.png",
        text: "Chicken"
    }
]

class Popular extends Component {
    constructor() {
        super();
        this.state = {
            value: data
        }
    }
    render() {
        return (
            <div className="popularfood">
                <h3>Our Popular Food</h3>
                <h1>Best Category Foods Menu</h1>
                <div className="foodcourt">
                {this.state.value.map(e => (
                    <Popularfoodcourt data={e} />
                ))
                }
                </div>
                <button>Need any Special Food or Any Birthday Cakes? Order Now</button>
            </div>
        )
    }
}

export default Popular;