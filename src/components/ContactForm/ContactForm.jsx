import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

import { FormInputName } from 'components/FormInputName/FormInputName';
import { FormInputNumber } from 'components/FormInputNumber/FormInputNumber';

const initialValues = {
  name: '',
  number: '',
  id: '',
};

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    addContact(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="name">
          <p>Name</p>
          <FormInputName />
        </label>
        <label htmlFor="number">
          <p>Number</p>
          <FormInputNumber />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
