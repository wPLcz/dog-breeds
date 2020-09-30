import { call, put } from 'redux-saga/effects';

export function executeAppCallAsync(fn) {
  let isExecuting = false;
  return function* execute(...params) {
    if (!isExecuting) {
      isExecuting = true;
      try {
        yield call(fn, ...params);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          window.location.reload();
        } else {
         console.error('requestFailed');
        }
      }
      isExecuting = false;
    } else {
      console.warn("Duplicated execution detected. We've handled it.");
    }
  };
}
