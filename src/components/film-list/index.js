import { useContext } from 'react';
import { FilmListItem } from 'components';
import { AppContext } from 'context';
import './style.css';

const FilmList = () => {
  const { state } = useContext(AppContext);
  const { films } = state;

  const elements = films.map(film => {
    return <FilmListItem key={film.id} {...film} />;
  });

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
