import film1 from '../components/app/img/film1.png';
import film2 from '../components/app/img/film2.png';
import film3 from '../components/app/img/film3.png';
import film4 from '../components/app/img/film4.png';
import film5 from '../components/app/img/film5.png';
import film6 from '../components/app/img/film6.png';

export const filmList = [
  {
    img: film1,
    name: 'Pulp Fiction',
    year: '2004',
    genres: ['Action & Adventure'],
    id: 1,
    rating: '8,6',
    time: '2h 34minute',
    description: `Two gangsters Vincent Vega and Jules Winfield have philosophical conversations in between showdowns and solving problems with the debtors of crime boss Marcellus Wallace.
In the first story, Vincent spends an unforgettable evening with Marsellus' wife Mia. The second tells about the boxer Butch Coolidge, bought by Wallace to pass the fight. In the third story, Vincent and Jules accidentally get into trouble.`
  },
  {
    img: film2,
    name: 'Bohemian Rhapsody',
    year: '2003',
    genres: ['Drama', 'Biography', 'Music'],
    id: 2,
    rating: '8.0',
    time: '2h 14minute',
    description: `A tribute to Queen, their music and their extraordinary vocalist, Freddie Mercury, who defied stereotypes and defied convention to become one of the most loved artists on the planet. The film traces the band's dizzying path to success through their iconic songs and groundbreaking sound, the band's near-disintegration as Mercury's lifestyle spirals out of control, and their triumphant reunion on the eve of the Live Aid concert, one of the greatest performances in the history of rock music.`
  },
  {
    img: film3,
    name: 'Kill Bill: Vol 2',
    year: '1994',
    genres: ['Oscar winning Movie'],
    id: 3,
    rating: '7.6',
    time: '2h 17minute',
    description: `After killing two members of the gang, The Bride was only halfway close to her goal. Now it's Bud and Ellie Driver's turn. Two more dangerous steps before the last fight, in which she must kill Bill.`
  },
  {
    img: film4,
    name: 'Avengers: War of Infinity',
    year: '2004',
    genres: ['Action & Adventure'],
    id: 4,
    rating: '8.1',
    time: '2h 29minute',
    description: `As the Avengers and their allies continue to defend the world from a variety of dangers that a single superhero couldn't handle, a new threat emerges from outer space: Thanos. An intergalactic tyrant aims to collect all six Infinity Stones - artifacts of incredible power with which you can change reality at will. Everything the Avengers have encountered before has led to this moment - the fate of the Earth has never been so uncertain.`
  },
  {
    img: film5,
    name: 'Inception',
    year: '2003',
    genres: ['Action & Adventure'],
    id: 5,
    rating: '8.7',
    time: '2h 28minute',
    description: `Cobb is a talented thief, the best of the best in the dangerous art of extraction: he steals valuable secrets from the depths of the subconscious during sleep, when the human mind is at its most vulnerable. Cobb's rare abilities have made him a valuable player in the treacherous world of industrial espionage, but they've also made him a fugitive and robbed of everything he's ever loved. 
But no amount of planning or skill can prepare a team to face a dangerous foe that seems to predict their every move. An enemy that only Cobb could see.`
  },
  {
    img: film6,
    name: 'Reservoir dogs',
    year: '1994',
    genres: ['Oscar winning Movie'],
    id: 6,
    rating: '8.1',
    time: '1h 40minute',
    description: `his should have been the perfect crime. Thinking of robbing a jewelry store, crime boss Joe Cabot brought together six experienced and completely unfamiliar criminals. But from the very beginning, everything went wrong, and the usual robbery turned into a bloody massacre.`
  }
];

export const defaultFilm = {
  img: '',
  name: '',
  year: '',
  genres: '',
  rating: 0,
  time: '',
  description: ''
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

export const dispatcherTypes = {
  DELETE: 'delete',
  CLOSE_MOVIE_FORM: 'close_movie_form',
  CLOSE_SUCCESS_MODAL: 'close_success_modal',
  CLOSE_INFO: 'close_info',
  SUBMIT: 'submit',
  FORM: 'form',
  INFO: 'info',
  EDIT: 'edit',
  CLOSE_DELETE_MODAL: 'close_delete_modal'
};
