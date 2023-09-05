import { FilmList, Footer, GenresMenu, NumberOfFilms } from 'components';
import './style.css';
import { useSelector } from "react-redux";

const MainPage = () => {

  const { films } = useSelector(state => state)

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
