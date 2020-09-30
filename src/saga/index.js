import { all } from 'redux-saga/effects';

import landingPage from './landingPage';

export default function* rootSaga() {
  yield all([
    landingPage(),
  ]);
}
