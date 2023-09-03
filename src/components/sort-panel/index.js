import imageSort from './Fill1.png';
import './style.css';

const SortPanel = () => (
  <div className='sort_panel'>
    <div className='sort_by'>SORT BY</div>
    <div className='sort_data'>RELEASE DATE</div>
    <img src={imageSort} className='sort_img' alt='Фотография' />
  </div>
);

export default SortPanel;
