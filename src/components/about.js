import { Component } from "react";
import {ArrowRightOutlined} from "@ant-design/icons";
import "../styles/about.css";


class About extends Component {
    render() {
        return (
            <div className="aboutqichen">
            <div className="abouttext">
                <h3>About Qichen</h3>
                <h2>The Best Tasty & Yamee Food and Chief Based on Italiano</h2>
                <p>Sit amet consectetur adipiscing elitsue risus mauris quam neque adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla vestibulum velvitae ut at elementum mauris, etiam ornare diame</p>
                <button>LEARN MORE  <ArrowRightOutlined /></button>
            </div>
            <div className="aboutimages">
                <section><img src="https://demo.webtend.net/html/qichen/assets/images/about/image-2.jpg"></img></section>
                <section><img src="https://demo.webtend.net/html/qichen/assets/images/about/image-1.jpg"></img></section>
            </div>
            </div>
        )
    }
}

export default About;