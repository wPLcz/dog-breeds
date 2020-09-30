import { takeEvery, call, put } from 'redux-saga/effects';
import { actions } from '../store/reducers/landingPage';
import * as api from '../api/landingPage';
import { executeAppCallAsync} from "./helpers";

function* fetchDogsListAsync() {
  const response = yield call(api.fetchDogsList);
  yield put(actions.fetchDogsListSuccess(response));
}

function* fetchBreedAsync(params) {
  const response = yield call(api.fetchBreed, {...params});
  yield put(actions.fetchBreedSuccess(response));
}

export default function* all() {
  yield takeEvery("FETCH_DOGS_LIST", executeAppCallAsync(fetchDogsListAsync));
  yield takeEvery("FETCH_BREED", executeAppCallAsync(fetchBreedAsync));
}
