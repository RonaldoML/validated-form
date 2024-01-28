import PropTypes from 'prop-types';
import './custom-button.css';

export const CustomButton = ({ type, onClick, title }) => {
  return (
    <button
      className='custom-button'
      type={type}
      onClick={onClick}>
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
};
