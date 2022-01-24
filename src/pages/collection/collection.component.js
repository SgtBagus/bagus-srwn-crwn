import React from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.components';

import './collection.style.scss';

const colectionFilter = (data, type) => data[type];

const CollectionPage = ({
    collections,
}) => {
    const { type } = useParams();
    const collection = colectionFilter(collections, type);

    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className='title'>{ title }</h2>
            <div className="items">
                {
                    items.map(x => <CollectionItem key={x.id} item={x} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        collections: selectCollection()(state)
    })
}

export default connect(mapStateToProps)(CollectionPage);