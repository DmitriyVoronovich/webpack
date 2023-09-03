import { defaultFilm } from 'consts';
import { dispatcherTypes } from 'consts';

export const reducer = (state, action) => {
  const { isMovieDeleted, films } = state;
  const {
    DELETE,
    CLOSE_MOVIE_FORM,
    CLOSE_SUCCESS_MODAL,
    CLOSE_INFO,
    SUBMIT,
    FORM,
    INFO,
    EDIT,
    CLOSE_DELETE_MODAL
  } = dispatcherTypes;
  const { type, payload } = action;
  switch (type) {
    case DELETE:
      return {
        ...state,
        films: state.films.filter(item => item.id !== payload),
        isMovieDeleted: !isMovieDeleted
      };
    case CLOSE_SUCCESS_MODAL:
      document.body.style.overflow = `visible`;
      return {
        ...state,
        isMovieAdded: false
      };
    case CLOSE_MOVIE_FORM:
      return {
        ...state,
        isFilmFormOpen: false
      };
    case CLOSE_INFO:
      return {
        ...state,
        filmInfo: false
      };
    case SUBMIT:
      const isFilmExist = films.some(item => item.id === payload.id);
      return {
        ...state,
        isMovieAdded: true,
        isFilmFormOpen: false,
        films: isFilmExist
          ? films.map(item => (item.id === payload.id ? payload : item))
          : [...films, { ...payload, id: films.length + 1 }],
        film: defaultFilm
      };
    case FORM:
      return {
        ...state,
        isFilmFormOpen: true,
        title: 'ADD MOVIE'
      };
    case INFO:
      return {
        ...state,
        film: payload,
        filmInfo: true
      };
    case EDIT:
      return {
        ...state,
        film: payload,
        title: 'EDIT MOVIE',
        isFilmFormOpen: true
      };
    case CLOSE_DELETE_MODAL:
      document.body.style.overflow = `visible`;
      return {
        ...state,
        isMovieDeleted: false
      };
    default:
      return state;
  }
};
