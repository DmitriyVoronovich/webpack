import { useContext } from 'react';
import { Button } from 'components';
import { buttonContent, dispatcherTypes } from 'consts';
import { AppContext } from 'context';
import close from '../film-movie-form/movie-form/img/CloseButton.png';
import './style.css';

const { DELETE, EDIT, INFO } = dispatcherTypes;

const FilmListItem = film => {
  const { dispatch } = useContext(AppContext);
  const { id, img, name, year, genres } = film;

  const onDelete = () =>
    dispatch({
      type: DELETE,
      payload: id
    });

  const handleInfo = () =>
    dispatch({
      type: INFO,
      payload: film
    });

  const handleEdit = () =>
    dispatch({
      type: EDIT,
      payload: film
    });

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
      <img className='film_item_img' src={img} alt='movie cover' />
      <div className='film_item_info'>
        <div className='film_item_name'>{name}</div>
        <div className='film_item_year'>{year}</div>
      </div>
      <div className='film_item_genres'>{genres}</div>
    </div>
  );
};

export default FilmListItem;
