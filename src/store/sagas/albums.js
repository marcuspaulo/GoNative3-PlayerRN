import api from "services/api";
import { call, put } from "redux-saga/effects";

import { Creators as AlbumsAction } from "store/ducks/albums";

export function* getAlbums() {
  try {
    const response = yield call(api.get, "/albums");

    yield put(AlbumsAction.getAlbumsSuccess(response.data));
  } catch (err) {
    yield put(
      AlbumsAction.getAlbumsFailure("Erros ao buscar álbums da API" + err)
    );
  }
}
