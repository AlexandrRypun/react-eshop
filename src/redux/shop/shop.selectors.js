import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections ? shop.collections : []
);

export const selectShopCollection = collectionId => createSelector(
    [selectShop],
    shop => shop.collections ? shop.collections.find(c => c.id === collectionId) : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => Boolean(shop.collections)
);
