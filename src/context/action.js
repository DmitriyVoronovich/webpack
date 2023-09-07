import {filmsFetching, filmsFetched, filmsFetchingError} from 'context'

export const fetchFilms = (request) => (dispatch) => {
  dispatch(filmsFetching());
  request("http://localhost:4000/movies")
    .then(data => dispatch(filmsFetched(data)))
    .catch(() => dispatch(filmsFetchingError()))
}

export const fetchFilmsGenres = (request, name) => (dispatch) => {
  dispatch(filmsFetching());
  request(`http://localhost:4000/movies?search=${name}&searchBy=genres`)
    .then(data => dispatch(filmsFetched(data)))
    .catch(() => dispatch(filmsFetchingError()))
}