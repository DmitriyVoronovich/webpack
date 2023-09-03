import { Button } from 'components';
import './style.css';

const SearchPanel = ({ buttonContent }) => (
  <div className='search_panel'>
    <input
      className='search_panel_input'
      placeholder={'What do you want to watch?'}
      type={'text'}
    />
    <Button {...buttonContent} />
  </div>
);

export default SearchPanel;
