import React from "react";
import {StyledHomepage} from "./homepage.styles" ;
import Directory from "../../components/directory/directory.component";

const Homepage= (props)=>(
    <StyledHomepage className="homepage">
        {/* props contains location history match sent from the Route component of the react-router-dom library */}
        <Directory/>
    </StyledHomepage>
)
export default Homepage;