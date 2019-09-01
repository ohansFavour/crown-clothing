import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children,isGoogleButton,inverted,...otherProps})=>(
<button className={`${inverted ? "inverted" : ""} ${isGoogleButton? "googleButton" : ""} custom-button`} {...otherProps} >{children}</button>
);
export default CustomButton;