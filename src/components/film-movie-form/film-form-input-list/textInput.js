import { useField } from 'formik';
import './style.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`input_container ${props.name}`}>
      <label htmlFor={props.name} className='input_name'>
        {label}
      </label>
      <input
        className={`input_style ${props.name}`}
        {...field}
        {...props}
        value={props.value}
        autoComplete='off'
        onChange={e => props.handleInputChange(e, `${props.name}`)}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
