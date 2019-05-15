import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_API_DATA, dataReceived } from "../actions";
import { appData } from "../response";

function fetchAPIData() {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/eSalon/interview/db'
  });
}

function* fetchEffectsSaga(action) {
  try {
    let { data } = yield call(fetchAPIData) || appData;
    yield put(dataReceived(data.data));
    // let { data } = appData;
    // yield put(dataReceived(data));
  } catch (e) {
    console.log(e)
  }
}

export function* fetchDataWatcherSaga() {
  yield takeLatest(FETCH_API_DATA, fetchEffectsSaga);
}

export default function* rootSaga() {
  yield all([
    fetchEffectsSaga(),
    fetchDataWatcherSaga()
  ])
}
