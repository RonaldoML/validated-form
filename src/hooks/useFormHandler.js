import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { MyContext } from "../MyContext";

export const useFormHandler = () => {
  const { setIsSubmitted } = useContext(MyContext)

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'First name must be minimum 2')
      .max(100, 'First name must not be more than 100 characters')
      .required('You need to enter a first name'),
    lastName: Yup.string()
      .min(2, 'Last name must be minimum 2')
      .max(100, 'Last name must not be more than 100 characters')
      .required('You need to enter a last name'),
    film: Yup.string(),

  });

  const handleSubmit = async () => {
    setIsSubmitted(true)
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      film: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formik };
}
