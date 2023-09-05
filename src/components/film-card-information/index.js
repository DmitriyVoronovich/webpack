import React from 'react';
import { Logo } from 'components';
import './style.css';

import {modalInfoClose} from 'context'
import { useDispatch, useSelector } from "react-redux";

const FilmCardInformation = () => {
  const dispatch = useDispatch();
  const closeInfo = () => dispatch(modalInfoClose());

  const {
    film: { img, name, year, genres, rating, time, description }
  } = useSelector(state => state);

  return (
    <div className='card_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button className='card_button' onClick={closeInfo}></button>
      <div className='card_container'>
        <img className='card_img' src={img} alt='Обложка фильма' />
        <div className='card_info_container'>
          <div className='card_film first'>
            <div className='card_film_name'>{name}</div>
            <div className='card_film_rating'>{rating}</div>
          </div>
          <div className='card_film_genres'>{genres}</div>
          <div className='card_film'>
            <div className='card_film_year'>{year}</div>
            <div className='card_film_time'>{time}</div>
          </div>
          <p className='card_film_text'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCardInformation;
