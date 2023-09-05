import { defaultFilm, filmList } from "consts";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  isFilmFormOpen: false,
  isMovieAdded: false,
  isMovieDeleted: false,
  filmInfo: false,
  film: defaultFilm,
  title: "",
  films: filmList
};

const index = createSlice({
  name: "context",
  initialState,
  reducers: {
    modalSuccessClose: state => {
      document.body.style.overflow = `visible`;
      state.isMovieAdded = false;
    },
    modalDeleteClose: state => {
      document.body.style.overflow = `visible`;
      state.isMovieDeleted = false;
      state.filmInfo = false;
    },
    movieFormClose: state => {
      state.isFilmFormOpen = false;
    },
    modalInfoClose: state => {
      state.filmInfo = false;
    },
    modalForm: state => {
      state.isFilmFormOpen = true;
      state.title = "ADD MOVIE";
    },
    modalInfo: (state, action) => {
      state.film = action.payload;
      state.filmInfo = true;
    },
    filmEdit: (state, action) => {
      state.film = action.payload;
      state.title = "EDIT MOVIE";
      state.isFilmFormOpen = true;
    },
    filmDelete: (state, action) => {
      state.films = state.films.filter(item => item.id !== action.payload);
      state.isMovieDeleted = true;
    },
    filmSubmit: (state, action) => {
      const isFilmExist = state.films.some(item => item.id === action.payload.id);
      state.isMovieAdded = true;
      state.isFilmFormOpen = false;
      state.films = isFilmExist
        ? state.films.map(item => (item.id === action.payload.id ? action.payload : item))
        : [...state.films, { ...action.payload, id: uuidv4() }];
      state.film = defaultFilm;
    }
  }
});

const { actions, reducer } = index;

export default reducer;
export const {
  filmSubmit,
  filmDelete,
  filmEdit,
  modalInfo,
  modalForm,
  modalInfoClose,
  movieFormClose,
  modalDeleteClose,
  modalSuccessClose
} = actions;