import { Footer, Logo, MovieForm } from '../../index';
import './style.css';

const FilmFormModule = () => {
  return (
    <div className='add_module'>
      <div className='logo_container'>
        <Logo />
      </div>
      <MovieForm />
      <Footer />
    </div>
  );
};

export default FilmFormModule;
