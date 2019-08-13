import React from "react";
import "./menu-item.style.scss";
import {withRouter} from "react-router-dom";


 const MenuItem= ({title,size,imageUrl,match,history, linkUrl})=>(
    <div 
    className={`${size} menu-item`}>
        <div
        className="background-image" 
        style={{
        backgroundImage: `url(${imageUrl})`
        }}
       onClick={()=>history.push(`${match.url}${linkUrl}`)} />
    <div className="content">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <span className="subtitle"> SHOP NOW</span>
    </div>
</div>   
)
// withRouter is an higher order func which gives the menuItem the route properties wherever it is called.  
export default withRouter(MenuItem);