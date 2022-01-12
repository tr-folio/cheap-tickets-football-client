import React from "react";
import TopBanner from "./TopBanner";
import Tournaments from "./Tournaments";
import Welcome from "./Welcome";
import TopNews from "./TopNews";
import TopPlayers from "./TopPlayers";
import LargestStadium from "./LargestStadium";
import TopCoaches from "./TopCoaches";
import TrainingGround from "./TrainingGround";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Matches from "./Matches";

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <br/> <br/>
            <Welcome/>
            <br/> <br/>
            <Matches/>
            <br/> <br/>
            <Tournaments/>
            <br/> <br/>
            <TopNews/>
            <br/> <br/>
            <TopPlayers/>
            <br/> <br/>
            <LargestStadium/>
            <br/> <br/>
            <TopCoaches/>
            <br/> <br/>
            <TrainingGround/>
            <br/> <br/>
            <Footer/>
        </div>
    )
}

export default Home;

/* import React from "react";

const Home = () => {
    return (
        <div>
            <h2>This is Home.</h2>
        </div>
    )
}

export default Home; */