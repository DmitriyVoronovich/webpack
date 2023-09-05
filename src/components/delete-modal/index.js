import { useEffect } from 'react';
import { Button, Footer, Logo } from 'components';
import { buttonContent } from 'consts';
import './style.css';

import { modalDeleteClose } from "context"
import { useDispatch } from "react-redux";

const DeleteModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = `hidden`;
  });

  const handleDelete = () => dispatch(modalDeleteClose());

  return (
    <div className='delete_modal_container'>
      <div className='logo_container'>
        <Logo />
      </div>
      <button className='add_form_buttons' onClick={handleDelete}></button>
      <div className='delete_modal'>
        <h1 className='delete_modal_title'>Delete MOVIE</h1>
        <h3 className='delete_modal_text'>
          Are you sure you want to delete this movie?
        </h3>
        <Button {...buttonContent.confirmButton} onClick={handleDelete} />
      </div>
      <div className='footer_container'>
        <Footer />
      </div>
    </div>
  );
};

export default DeleteModal;
