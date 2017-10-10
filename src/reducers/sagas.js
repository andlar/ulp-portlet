import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import types from '../constants/';

const apiCall = () => (
  fetch('http://www.filltext.com?rows=30&id={index}&name={firstName}~{lastName}&status=["discharged","recent","active"]')
        .then(response => response.json())
);

function* getPatients() {
    try {
        const patients = yield call(apiCall);
        yield put({ type: types.GET_PATIENTS_SUCCEEDED, patients });
    } catch (e) {
        yield put({ type: types.GET_PATIENTS_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(types.GET_PATIENTS, getPatients);
}

export default mySaga;
