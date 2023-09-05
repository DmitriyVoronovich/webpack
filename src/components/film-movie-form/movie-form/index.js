import { useState } from 'react';
import { buttonContent } from 'consts';
import { Button, FilmFormInputList } from '../../index';
import './style.css';

import { filmSubmit, movieFormClose } from 'context'
import { useDispatch, useSelector } from "react-redux";

const MovieForm = () => {
  const dispatch = useDispatch();
  const {film, title} = useSelector(state => state)
  const [newFilm, setNewFilm] = useState(film);

  const handleClick = () => dispatch(filmSubmit(newFilm));

  const closeForm = () => dispatch(movieFormClose());

  return (
    <div className='add_container'>
      <div className='add_form'>
        <button className='add_form_button' onClick={closeForm}></button>
        <h1 className='add_form_title'>{title}</h1>
        <FilmFormInputList newFilm={newFilm} setNewFilm={setNewFilm} />
        <Button {...buttonContent.resetButton} />
        <Button {...buttonContent.submitButton} onClick={handleClick} />
      </div>
    </div>
  );
};
export default MovieForm;
