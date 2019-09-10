import React from "react";
import "./collection.styles.scss";
import {connect} from "react-redux";
import CollectionItem from "../collection-items/collection-item.component";
import {selectSpecificCollection} from "../../redux/shop/shop.selector";
import {withRouter} from "react-router-dom";

const CollectionPage = ({collection})=>{
       const {title, items} = collection;
  return(
    <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className ="items">
        {items.map(item => (
            <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
</div>
  )  
};

const mapStateToProps = (state,ownProps) =>({
    collection: selectSpecificCollection(ownProps.match.params.collectionId)(state)
})
export default withRouter(connect(mapStateToProps)(CollectionPage));
