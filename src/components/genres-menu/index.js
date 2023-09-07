import { SortPanel } from "components";
import "./style.css";
import GenresMenuItem from "../genres-menu-item";
import { menuGenres } from "consts";

const GenresMenu = () => {

  const genres = menuGenres;

  const elements = (arr) => {
    return arr.map((genres) => {
      return <GenresMenuItem key={genres.name} {...genres} />;
    });
  };



  return (
    <div className="genres_menu">
      <ul className="genres_list">
        {elements(genres)}
      </ul>
      <SortPanel />
    </div>
  );
};

export default GenresMenu;
