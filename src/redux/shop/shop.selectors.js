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

export const selectCollection = () => (createSelector(
    [selectCollections],
    collections => collections
));