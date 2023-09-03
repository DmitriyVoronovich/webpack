import './style.css';



const Button = ({ name, className, type, onClick }) => (
  <a href='#'>
    <button type={type} className={className} onClick={onClick}>
      {name}
    </button>
  </a>
);

export default Button;
