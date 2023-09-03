import { inputInfo } from 'consts';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import SelectInput from './selectInput';
import './style.css';
import TextInput from './textInput';

const FilmFormInputList = ({ film, setFilm }) => {
  const handleInputChange = (e, fieldName) => {
    const changedFilm = { ...film };
    changedFilm[fieldName] = e.target.value;
    setFilm(changedFilm);
  };

  const firstPart = inputInfo.slice(0, 2).map(ip => {
    const { id, ...itemProps } = ip;

    return (
      <TextInput
        key={id}
        value={film[itemProps.name]}
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
        value={film[itemProps.name]}
        handleInputChange={handleInputChange}
      />
    );
  });

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    rating: Yup.number()
      .min(0, 'Less then min value!')
      .max(10, 'More then max value!')
      .required('Required'),
    img: Yup.string().required('Required'),
    time: Yup.number().min(0, 'Too low!').required('Required'),
    year: Yup.string().required('Required'),
    genres: Yup.array().min(1, 'Less then min value!').required('Required'),
    description: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        img: '',
        genres: '',
        year: '',
        rating: 0,
        time: 0,
        description: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='film_form_input_list'>
        {firstPart}
        <SelectInput
          handleInputChange={handleInputChange}
          filmGenres={film.genres}
        />
        {secondPart}
      </Form>
    </Formik>
  );
};

export default FilmFormInputList;
