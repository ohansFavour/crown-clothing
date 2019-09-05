import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import {connect} from "react-redux";
import {selectSections} from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";


const directory = ({sections})=>(
            <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps} />)
                
                )}
            </div>
        )
//  createStructuredSelector sends the state as a prop to selectSections
//So, instead of getting from state, we are getting from reselected state
const mapStateToProps = createStructuredSelector({
    sections: selectSections
})
export default connect(mapStateToProps)(directory);