import PropTypes from 'prop-types';
import { useFormHandler } from '../hooks/useFormHandler';
import { ValidationErrorBanner } from './ValidationErrorBanner';
import { CustomInput } from './CustomInput';
import { CustomSelect } from './CustomSelect';
import { CustomButton } from './CustomButton';
import './form.css';

export const Form = ({ films }) => {

  const { formik } = useFormHandler();

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched } = formik;

  const { firstName, lastName, film } = values;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-body-container'>
        {errors.firstName && touched.firstName && (
          <ValidationErrorBanner error={errors.firstName} />
        )}
        {errors.lastName && touched.lastName && (
          <ValidationErrorBanner error={errors.lastName} />
        )}
        <div className='form-inputs-container'>
          <CustomInput
            id="firstName"
            title="First name"
            type="text"
            name="firstName"
            value={firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.firstName && touched.firstName ?
              'input-error' : null
            }

          />
          <CustomInput
            id="lastName"
            title="Last name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className={errors.lastName && touched.lastName ?
              'input-error' : null
            }
          />
        </div>
        <CustomSelect
          id="film"
          title="My favorite Star Wars movie"
          type="text"
          name="film"
          value={film}
          options={films}
          onChange={handleChange}
        />
      </div>
      <div className='form-button-container' >
        <CustomButton type='submit' title='Submit' />
      </div>
    </form>
  );
};

Form.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  })),
};
