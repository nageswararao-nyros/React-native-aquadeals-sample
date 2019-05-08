import {  takeEvery, call, put, select } from 'redux-saga/effects';

import { REQ_HOME_DATA, RES_HOME_DATA, REQ_HOME_DEAL_DATA, RES_HOME_DEAL_DATA,  REQ_HOME_BRAND_DATA, RES_HOME_BRAND_DATA, REQ_HOME_DASHBOARD_DATA, RES_HOME_DASHBOARD_DATA } from '../actions/HomeApi';

export const getHomeData = () => fetch('https://www.aquadeals.in/admin/web2/user/getOffers');
export const getHomeDealData = () => fetch('https://www.aquadeals.in/admin/web2/user/getdealOffers');
export const getHomeBrandData = () => fetch('https://www.aquadeals.in/admin/web2/user/brand_store');
export const getHomeDashBoardData = () => fetch('https://www.aquadeals.in/admin/web2/user/dashboard_icons');

const fetchHomeData = function* (action) {
	const response = yield call(getHomeData);
  const result = yield response.json();
  yield put({ type: RES_HOME_DATA, result })
};

const fetchHomeDealData = function* (action) {
	const response = yield call(getHomeDealData);
  const result = yield response.json();
  yield put({ type: RES_HOME_DEAL_DATA, result })
};

const fetchHomeBrandData = function* (action) {
	const response = yield call(getHomeBrandData);
  const result = yield response.json();
  yield put({ type: RES_HOME_BRAND_DATA, result })
};

const fetchHomeDashboardData = function* (action) {
	const response = yield call(getHomeDashBoardData);
  const result = yield response.json();
  yield put({ type: RES_HOME_DASHBOARD_DATA, result })
};

const rootSaga = function* () {
	yield takeEvery(REQ_HOME_DATA, fetchHomeData);
  yield takeEvery(REQ_HOME_DEAL_DATA, fetchHomeDealData);
  yield takeEvery(REQ_HOME_BRAND_DATA, fetchHomeBrandData);
  yield takeEvery(REQ_HOME_DASHBOARD_DATA, fetchHomeDashboardData);
};

export default rootSaga;
