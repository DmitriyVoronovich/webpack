import { useHttp } from "../../hooks/http.hooks";
import { useDispatch } from "react-redux";
import { fetchFilms, fetchFilmsGenres } from "context/action";
import { menuGenres } from "consts";

const GenresMenuItem = (genres) => {
const {name, value, active} = genres
  const {request} = useHttp()
  const dispatch = useDispatch();

const onCl = () => {
  menuGenres.forEach(item => {
    if (item.active === true) {
      item.active = false
    }
    if (item.name === name) {
      item.active = true
    }
  })
}

  const sortGenres = ()=> {
    onCl();
    if (name === 'all') {
      dispatch(fetchFilms(request));
    } else {
      dispatch(fetchFilmsGenres(request, name));
    }
  };

  return (
  <div onClick={sortGenres} className={`genres_item ${active ? ' active' : ''}`}>{value}</div>
  )
}

export default GenresMenuItem;