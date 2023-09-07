import { inputInfo } from 'consts';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from './selectInput';
import './style.css';
import TextInput from './textInput';

const FilmFormInputList = ({ newFilm, setNewFilm }) => {
  const handleInputChange = (e, fieldName) => {
    const changedFilm = { ...newFilm };
    changedFilm[fieldName] = e.target.value;
    setNewFilm(changedFilm);
  };

  const firstPart = inputInfo.slice(0, 2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <TextInput
        key={id}
        value={newFilm[itemProps.name]}
        {...itemProps}
        handleInputChange={handleInputChange}
      />
    );
  });

  const secondPart = inputInfo.slice(2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <TextInput
        key={id}
        {...itemProps}
        value={newFilm[itemProps.name]}
        handleInputChange={handleInputChange}
      />
    );
  });

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    vote_average: Yup.number()
      .min(0, 'Less then min value!')
      .max(10, 'More then max value!')
      .required('Required'),
    poster_path: Yup.string().required('Required'),
    runtime: Yup.number().min(0, 'Too low!').required('Required'),
    release_date: Yup.string().required('Required'),
    genres: Yup.array().min(1, 'Less then min value!').required('Required'),
    overview: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={{
        title: '',
        poster_path: '',
        genres: '',
        release_date: '',
        vote_average: 0,
        runtime: 0,
        overview: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='film_form_input_list'>
        {firstPart}
        <SelectInput
          handleInputChange={handleInputChange}
          filmGenres={newFilm.genres}
        />
        {secondPart}
      </Form>
    </Formik>
  );
};

export default FilmFormInputList;
