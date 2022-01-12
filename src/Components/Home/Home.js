import React from "react";
import TopBanner from "./TopBanner";
import Tournaments from "./Tournaments";
import Welcome from "./Welcome";

const Home = () => {
    return (
        <div>
            <h2>This is Home.</h2>
            <TopBanner/>
            <br/> <br/>
            <Welcome/>
            <br/> <br/>
            <Tournaments/>
            <br/> <br/>
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