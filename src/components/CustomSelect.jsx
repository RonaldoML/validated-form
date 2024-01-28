import PropTypes from 'prop-types';
import './custom-select.css';

export const CustomSelect = ({ type, title, name, id, options, value, onChange }) => {
  return (
    <div className='form-select-container'>
      <label htmlFor="film">{title}</label>
      <select
        className='form-select'
        type={type}
        id={id}
        name={name}
        defaultValue={options[0]}
        value={value}
        onChange={onChange}>
        {options.map((film) => (
          <option key={film.id} value={value}>
            {film.title}
          </option>
        ))}
      </select>
    </div>
  );
};

CustomSelect.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array
};