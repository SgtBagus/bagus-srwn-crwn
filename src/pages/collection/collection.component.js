import React from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.components';

import './collection.style.scss';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    men: 5,
}

const colectionFilter = (data, type) => data.find(x => x.id === COLLECTION_ID_MAP[type]);

const CollectionPage = ({
    collections,
}) => {
    const { type } = useParams();
    const items = colectionFilter(collections, type);

    return (
        <div className="category">
            <h2>COLLECTION PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        collections: selectCollection()(state)
    })
}

export default connect(mapStateToProps)(CollectionPage);