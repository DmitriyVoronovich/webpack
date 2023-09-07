import { Button } from 'components';
import { buttonContent } from 'consts';
import close from '../film-movie-form/movie-form/img/CloseButton.png';
import './style.css';

import { filmDelete, filmEdit, modalInfo } from 'context'
import { useDispatch } from "react-redux";

const FilmListItem = film => {
  const dispatch = useDispatch();
  const { id, poster_path, title, release_date, genres } = film;

  const onDelete = () => dispatch(filmDelete(id));

  const handleInfo = () => dispatch(modalInfo(film));

  const handleEdit = () => dispatch(filmEdit(film));

  return (
    <div className='film_item_container' onClick={handleInfo}>
      <div className='film_item_button'>
        <div className='film_button_container'>
          <img
            src={close}
            className='menu_item_button'
            alt='Обложка фильма'
          ></img>
          <Button {...buttonContent.editButtonItem} onClick={handleEdit} />
          <Button {...buttonContent.deleteButtonItem} onClick={onDelete} />
        </div>
      </div>
      <img className='film_item_img' src={poster_path} alt='movie cover' />
      <div className='film_item_info'>
        <div className='film_item_name'>{title}</div>
        <div className='film_item_year'>{release_date}</div>
      </div>
      <div className='film_item_genres'>{genres}</div>
    </div>
  );
};

export default FilmListItem;
