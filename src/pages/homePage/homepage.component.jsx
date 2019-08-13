import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";

const Homepage= (props)=>(
    <div className="homepage">
        {/* props contains location history match sent from the Route component of the react-router-dom library */}
        <Directory/>
    </div>
)
export default Homepage;