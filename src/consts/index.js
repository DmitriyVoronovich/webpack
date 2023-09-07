export const defaultFilm = {
  id: 0,
  poster_path: '',
  title: '',
  release_date: '',
  genres: '',
  vote_average: 0,
  runtime: '',
  overview: ''
};

export const buttonContent = {
  resetButton: { name: 'RESET', className: 'reset_button', type: 'reset' },
  submitButton: { name: 'SUBMIT', className: 'submit_button', type: 'submit' },
  editButton: { name: 'EDIT', className: 'submit_button' },
  addButton: { name: '+ ADD MOVIE', className: 'add_button' },
  searchButton: { name: 'SEARCH', className: 'search_panel_button' },
  confirmButton: { name: 'confirm', className: 'confirm_button' },
  editButtonItem: { name: 'Edit', className: 'edit_button_item' },
  deleteButtonItem: { name: 'Delete', className: 'delete_button_item' }
};

export const menuGenres = [
  {name: 'all', value: 'ALL', active: true},
  {name: 'documentary', value: 'DOCUMENTARY', active: false},
  {name: 'comedy', value: 'COMEDY', active: false},
  {name: 'horror', value: 'HORROR', active: false},
  {name: 'crime', value: 'CRIME', active: false}
]

export const inputInfo = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    label: 'TITLE',
    placeholder: 'Enter movie title'
  },
  {
    id: 2,
    name: 'img',
    type: 'url',
    label: 'MOVIE URL',
    placeholder: 'https://'
  },
  {
    id: 3,
    name: 'year',
    type: 'date',
    label: 'RELEASE DATE',
    placeholder: 'Select Date'
  },
  {
    id: 4,
    name: 'rating',
    type: 'number',
    label: 'RATING',
    placeholder: 'Enter movie rating'
  },
  {
    id: 5,
    name: 'time',
    type: 'text',
    label: 'RUNTIME',
    placeholder: 'minutes'
  },
  {
    id: 6,
    name: 'description',
    as: 'textarea',
    label: 'OVERVIEW',
    placeholder: 'Movie description'
  }
];

export const genres = [
  'Action & Adventure',
  'Drama',
  'Horror',
  'Comedy',
  'Biography',
  'Oscar winning Movie'
];