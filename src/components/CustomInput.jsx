import PropTypes from 'prop-types';
import './custom-input.css';

export const CustomInput = ({ type, title, name, id, value, onBlur, onChange, className }) => {
  return (
    <div className='form-input-container'>
      <label
        htmlFor={id}>
        {title}
        <span className='form-input--required'>*</span>
      </label>
      <input
        className={`form-input ${className}`}
        type={type}
        id={id}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
