import { takeEvery, put } from 'redux-saga/effects';
import { shopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import SHOP_DATA from '../../pages/shop/shop.data';


export function* fetchCollectionsAsync() {
    try {
        const collections = yield new Promise(res => setTimeout(() => res(SHOP_DATA), 2000));
        yield put(fetchCollectionsSuccess(collections));
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(shopActionTypes.fetchCollectionsStart, fetchCollectionsAsync);
}
