
import PropTypes from 'prop-types';

export const RequestStatesBanner = ({ message }) => {

  return (
    <p>{message}</p>
  );
};

RequestStatesBanner.propTypes = {
  message: PropTypes.string,
};