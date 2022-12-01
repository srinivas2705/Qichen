import React, {Component} from "react"
import Header from "./components/header.js";
import Banner from "./components/banner.js";
import Popular from "./components/popular.js";
import About from "./components/about.js";
import Foodmenu from "./components/foodmenu.js";
import Chefs from "./components/chefs.js";
import Video from "./components/video.js";
import Footer from "./components/footer.js";
import Images from "./components/images.js";
import Timings from "./components/timings.js";
import Reservation from "./components/reservation.js";
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Banner/>
        <Popular/>
        <About/>
        <Foodmenu/>
        <Chefs/>
        <Video/>
        <Timings/>
        <Reservation/>
        <Images/>
        <Footer/>
      </div>
    )
  }
}

export default App;



