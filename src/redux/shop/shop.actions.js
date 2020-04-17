import { shopActionTypes } from './shop.types';

export const updateCollections = collections => ({
    type: shopActionTypes.updateCollections,
    payload: collections
});

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.fetchCollectionsStart
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.fetchCollectionsSuccess,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.fetchCollectionsFailure,
    payload: errorMessage
});
