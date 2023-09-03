import { useContext, useEffect } from 'react';
import { Button, Footer, Logo } from 'components';
import { buttonContent, dispatcherTypes } from 'consts';
import { AppContext } from 'context';
import './style.css';

const { CLOSE_DELETE_MODAL } = dispatcherTypes;

const DeleteModal = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = `hidden`;
  });

  const handleDelete = () => dispatch({ type: CLOSE_DELETE_MODAL });

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
