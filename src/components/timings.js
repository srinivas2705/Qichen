import {Component} from "react";
import "../styles/timings.css";
class Timings extends Component{
    render(){
        return(
            <div className="timings">
                <div className="timingstext">
                    <h3>WORKING HOUR</h3>
                    <h1>Enjoy Our Foods From 6 Days In a Week</h1>
                    <p className="schedule">Monday - Friday------------------------09am-6pm</p>
                    <p className="schedule">Saturday-------------------------------08am-7pm</p>
                    <p className="schedule">Sunday-----------------------------------Closed</p>
                </div>
                <img src="https://demo.webtend.net/html/qichen/assets/images/bg/hours-bg-1.jpg" alt="timingimg"></img>
            </div>
        )
    }
}

export default Timings;