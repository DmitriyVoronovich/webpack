import { FilmListItem } from 'components';
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hooks";
import { fetchFilms } from "context/action";
import Spinner from "components/spinner";

const FilmList = () => {

  useEffect(() => {
    dispatch(fetchFilms(request))
    // eslint-disable-next-line
  }, []);

  const {request} = useHttp()
  const dispatch = useDispatch();
  const {filmsLoadingStatus, films} = useSelector(state => state)

  if (filmsLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (filmsLoadingStatus === "error") {
    return <h5>Ошибка загрузки</h5>
  }

  const renderFilms = (arr) => {
    return arr.map(film => {
      return <FilmListItem key={film.id} {...film} />;
    })
  }

  const elements = renderFilms(films);

  return <div className='film_list'>{elements}</div>;
};

export default FilmList;
