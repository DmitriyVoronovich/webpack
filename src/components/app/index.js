import { useReducer } from 'react';
import {
  DeleteModal,
  FilmCardInformation,
  FilmFormModule,
  HeaderPanel,
  MainPage,
  SuccessModal
} from 'components';
import { AppContext, defaultState, init } from 'context';
import { reducer } from 'context';
import './style.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState, init);
  const { isMovieAdded, isFilmFormOpen, isMovieDeleted, filmInfo } = state;

  return (
    <div className='App'>
      <AppContext.Provider value={{ state, dispatch }}>
        {isMovieAdded && <SuccessModal />}
        {isFilmFormOpen && <FilmFormModule />}
        {isMovieDeleted && <DeleteModal />}
        {filmInfo ? <FilmCardInformation /> : <HeaderPanel />}
        <MainPage />
      </AppContext.Provider>
    </div>
  );
};

export default App;
