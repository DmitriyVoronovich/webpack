import React from 'react';
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import { genres } from 'consts';
import './style.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const SelectInput = ({ filmGenres }) => {
  const [genreName, setGenreName] = React.useState([filmGenres]);

  const handleChange = event => {
    const {
      target: { value }
    } = event;
    setGenreName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div className='input_container genres'>
      <FormControl sx={{ m: 1, width: 300 }}>
        <label htmlFor='genres' className='input_name'>
          GENRE
        </label>
        <Select
          style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: '20px' }}
          className='input_style genres'
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={genreName}
          onChange={handleChange}
          input={<OutlinedInput label='Select Genre' />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={{ color: '#fff', background: 'rgba(35, 35, 35, 0.92)' }}
            >
              <Checkbox checked={genreName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
