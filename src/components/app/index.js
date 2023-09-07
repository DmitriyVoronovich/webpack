import { DeleteModal, FilmCardInformation, FilmFormModule, HeaderPanel, MainPage, SuccessModal } from "components";
import "./style.css";
import { useSelector } from "react-redux";

const App = () => {

  const {
    isMovieAdded,
    isFilmFormOpen,
    isMovieDeleted,
    filmInfo
  } = useSelector(state => state);

  return (
    <div className="App">
      {isMovieAdded && <SuccessModal />}
      {isFilmFormOpen && <FilmFormModule />}
      {isMovieDeleted && <DeleteModal />}
      {filmInfo ? <FilmCardInformation /> : <HeaderPanel />}
      <MainPage />
    </div>
  );
};

export default App;
