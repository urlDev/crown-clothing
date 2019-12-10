import React from "react";

import CollectionItem from "../collection-item/collection-item.component"

import "./preview-collection.styles.scss";

const CollectionPreview = ({title, items}) => (
    /* items are coming from shop data */
    <div className="collection-preview">
        <h1 className="title">
            {title.toUpperCase()}
        </h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4) /* we want array to be filtered to only 4 items. only 4 items will show in every title */
                .map(item => (
                    <CollectionItem key= {item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;