import PropTypes from 'prop-types';
import './validation-error-banner.css';

export const ValidationErrorBanner = ({ error }) => {
  return (
    <span className="error">{error}</span>
  );
};

ValidationErrorBanner.propTypes = {
  error: PropTypes.string,
};