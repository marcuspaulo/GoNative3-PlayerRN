import api from "services/api";
import { call, put } from "redux-saga/effects";

import { Creators as SearchAction } from "store/ducks/search";

export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.term}`);

    yield put(SearchAction.searchSuccess(response.data));
  } catch (err) {
    yield put(
      SearchAction.searchFailure("Erros ao buscar músicas da API" + err)
    );
  }
}
