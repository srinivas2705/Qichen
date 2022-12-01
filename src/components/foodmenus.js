import {Component} from "react";

class Foodmenus extends Component{
    constructor(){
        super();
    }
    render(){
        const {data} = this.props;
        return(
            <div className="foodmenus">
                 <img src={data.img}></img>
                <div>
                <p>{data.text}</p>
                <p>{data.text1}</p>
                <p>{data.text2}</p>
                </div>
            </div>
        )
    }
}

export default Foodmenus;