import {Component} from "react";
import {CheckCircleTwoTone, ArrowRightOutlined} from "@ant-design/icons";
import "../styles/video.css";

class Video extends Component{
    render(){
        return(
            <div className="video">
        
                <img src="https://demo.webtend.net/html/qichen/assets/images/gallery/video-1.jpg" alt="video"></img>
                
               
                <div className="videoText">
                    <h3>Watch Video</h3>
                    <h1>How Can We Made Foods For Customers</h1>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <p><CheckCircleTwoTone />    Best Way to Serve Our Foods</p>
                    <p><CheckCircleTwoTone />    Low Cost & Online Orders</p>
                    <button>WATCH MORE <ArrowRightOutlined /></button>
                </div>
            </div>
        )
    }
}

export default Video;