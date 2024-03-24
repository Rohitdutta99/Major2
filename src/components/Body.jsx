import React from "react";
import Banner from "./Banner";
import imgLinks from "../imgLinks";
import Gap from "./Gap_ele";
import Gym_listings from "./Gym_listings";
import Subheadings from "./Subheadings";

function Body(props){
    return (<div className="body_div">
        <Gap />
        <Banner key={imgLinks[0].key} id={imgLinks[0].key} img={imgLinks[0].imageURL} />
        <Gap />
        <Subheadings text="Featured Gyms"/>
        <Gap />
        <Gym_listings />
        <Gap />
    </div>);
}

export default Body;