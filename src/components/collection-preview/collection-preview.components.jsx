import React from 'react';

import CollectionItem from '../collection-item/collection-item.components';

import './collection-preview.style.scss';

const CollectionPreview = ({
    title, items,
}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((x, idx) => idx < 4)
                    .map((i) => (
                        <CollectionItem key={i.id} item={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;