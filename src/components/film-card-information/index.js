import React from 'react';
import { Logo } from 'components';
import './style.css';

import {modalInfoClose} from 'context'
import { useDispatch, useSelector } from "react-redux";

const FilmCardInformation = () => {
  const dispatch = useDispatch();
  const closeInfo = () => dispatch(modalInfoClose());

  const {
    film: { poster_path, title, release_date, genres, vote_average, runtime, overview }
  } = useSelector(state => state);

  return (
    <div className='card_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button className='card_button' onClick={closeInfo}></button>
      <div className='card_container'>
        <img className='card_img' src={poster_path} alt='Обложка фильма' />
        <div className='card_info_container'>
          <div className='card_film first'>
            <div className='card_film_name'>{title}</div>
            <div className='card_film_rating'>{vote_average}</div>
          </div>
          <div className='card_film_genres'>{genres}</div>
          <div className='card_film'>
            <div className='card_film_year'>{release_date}</div>
            <div className='card_film_time'>{runtime}</div>
          </div>
          <p className='card_film_text'>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCardInformation;
