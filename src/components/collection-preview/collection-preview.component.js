import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from  "../collection-items/collection-item.component";

const CollectionPreview = ({items, title})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
       <div className="preview">
       {items.filter((item,indx)=>( indx<4)).map(({id,...otherItems})=>(
         <CollectionItem key={id} {...otherItems}/>
        ))}   
        </div> 
    </div>
)
export default CollectionPreview;