import { useEffect } from 'react';
import { Button, Logo, SearchPanel } from 'components';
import { buttonContent } from 'consts';
import './style.css';

import { modalForm } from 'context'
import { useDispatch } from "react-redux";


const HeaderPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = `visible`;
  }, []);

  const onAddFilm = () => dispatch(modalForm());

  return (
    <div className='heard_panel_background'>
      <div className='heard_panel'>
        <span className='heard_panel_log'>
          <Logo />
        </span>
        <Button {...buttonContent.addButton} onClick={onAddFilm} />
        <div className='head_panel_text'>FIND YOUR MOVIE</div>
        <SearchPanel buttonContent={buttonContent.searchButton} />
      </div>
    </div>
  );
};

export default HeaderPanel;
