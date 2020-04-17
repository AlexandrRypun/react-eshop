import { shopActionTypes } from './shop.types';

export const updateCollections = collections => ({
    type: shopActionTypes.updateCollections,
    payload: collections
});
