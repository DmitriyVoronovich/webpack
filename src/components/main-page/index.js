import { useContext } from 'react';
import { FilmList, Footer, GenresMenu, NumberOfFilms } from 'components';
import { AppContext } from 'context';
import './style.css';

const MainPage = () => {
  const { state } = useContext(AppContext);
  const { films } = state;

  const filmCounter = films.length;

  return (
    <div className='main'>
      <GenresMenu />
      <div className='genres_line'></div>
      <NumberOfFilms filmCounter={filmCounter} />
      <FilmList />
      <Footer />
    </div>
  );
};

export default MainPage;
