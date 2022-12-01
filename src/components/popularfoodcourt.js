import { Component } from "react";
import { ArrowRightOutlined} from "@ant-design/icons";


class Popularfoodcourt extends Component{
    constructor(){
        super();
    }
    render(){
        const {data} = this.props;
        return(
            <div className="card">
                <img src={data.img}></img>
                <p>{data.text}</p>
                <button><ArrowRightOutlined /></button>
            </div>
        )
    }
}

export default Popularfoodcourt;