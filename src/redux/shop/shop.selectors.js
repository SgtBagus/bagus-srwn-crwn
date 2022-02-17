import { createSelector } from 'reselect';

const selectShop = (state) => {
    const { shop } = state;
    return shop;
}

export const selectCollections = createSelector(
    [selectShop],
    shop => {
        const { collections } = shop;
        return collections;
    }
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = () => (createSelector(
    [selectCollections],
    (collections) => (collections ? collections : null),
));

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => {
        const { isFetching } = shop;
        return isFetching;
    }
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => {
        const { collection } = shop;
        return !!collection;
    }
)
