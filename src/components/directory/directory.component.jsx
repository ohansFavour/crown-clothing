import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import {staticData} from "./static-directory-data"

class directory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections:staticData
        }
    }
    render(){
        return(
            <div className="directory-menu">
            {this.state.sections.map(({id, ...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps} />)
                
                )}
            </div>
        )
    }
}
export default directory;