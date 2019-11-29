import React from "react";

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
                    <div key= {item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;