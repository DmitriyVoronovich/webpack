import { createContext } from 'react';
import { defaultFilm, filmList } from 'consts';

export const defaultState = {
  isFilmFormOpen: false,
  isMovieAdded: false,
  isMovieDeleted: false,
  filmInfo: false,
  film: defaultFilm,
  title: '',
  films: filmList
};

export const AppContext = createContext(defaultState);

export function init(state) {
  return { ...state };
}
