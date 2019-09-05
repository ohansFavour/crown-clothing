import React from "react";
import "./collection-overview.styles.scss";
import {selectCollectionArray} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";

const CollectionOverview = ({collections})=>(
    <div className="collection-overview">

      { collections.map(({id, ...otherData})=>(
                   <CollectionPreview key={id} {...otherData}/>
              ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionArray
})

export default connect(mapStateToProps)(CollectionOverview);