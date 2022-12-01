import { Component } from "react";
import {ArrowRightOutlined} from "@ant-design/icons";
import "../styles/reservation.css";
import { UserOutlined, CalendarOutlined, FieldTimeOutlined  } from '@ant-design/icons';
import { Input } from 'antd';



class Reservation extends Component{
    render(){
        return(
            <div className="reservation">
                <img src="https://demo.webtend.net/html/qichen/assets/images/contact/contact-1.jpg" alt="reservation"></img>
                <div className="reservationtext">
                    <h3>BOOKING TABLE</h3>
                    <h1>Make A Reservations</h1>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris adipiscing phasellus aene ante orcirat</p>
                    <Input size="large" className="reservationinput" placeholder="Person" prefix={<UserOutlined />} />
                    <Input size="large" className="reservationinput" placeholder="Reserved Date" prefix={<CalendarOutlined />} />
                    <Input size="large" className="reservationinput" placeholder="Reserevation Time" prefix={<FieldTimeOutlined />} />
                    <button>BOOK A TABLE <ArrowRightOutlined /></button>

                </div>
            </div>
        )
    }
}

export default Reservation;