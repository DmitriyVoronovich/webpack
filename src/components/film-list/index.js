import { FilmListItem } from 'components';
import './style.css';
import { useSelector } from "react-redux";

const FilmList = () => {

  const { films } = useSelector(state => state);

  const elements = films.map(film => {
    return <FilmListItem key={film.id} {...film} />;
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
