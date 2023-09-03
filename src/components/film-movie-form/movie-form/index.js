import { useContext, useState } from 'react';
import { buttonContent, dispatcherTypes } from 'consts';
import { AppContext } from 'context';
import { Button, FilmFormInputList } from '../../index';
import './style.css';

const { SUBMIT, CLOSE_MOVIE_FORM } = dispatcherTypes;

const MovieForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [film, setFilm] = useState(state.film);

  const handleClick = () =>
    dispatch({
      type: SUBMIT,
      payload: film
    });

  const closeForm = () =>
    dispatch({
      type: CLOSE_MOVIE_FORM
    });

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button className='add_form_button' onClick={closeForm}></button>
        <h1 className='add_form_title'>{state.title}</h1>
        <FilmFormInputList film={film} setFilm={setFilm} />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default MovieForm;
