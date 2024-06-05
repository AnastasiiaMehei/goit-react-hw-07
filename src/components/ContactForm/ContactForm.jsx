import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice"; // Ensure this  is correct
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
  });

  const dataId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values) => {
        const newContact = {
          id: nanoid(), // Generate a unique ID for the new contact
          ...values,
        };
        dispatch(addContact(newContact)); // Dispatch the addContact action with the new contact
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form className={css.form} onSubmit={handleSubmit}>
          <div className={css.div}>
            <label htmlFor={dataId}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={dataId}
              placeholder="Name..."
            />
            <ErrorMessage className={css.span} name="name" component="span" />
          </div>
          <div className={css.div}>
            <label htmlFor={dataId}>Phone</label>
            <Field
              className={css.field}
              type="number"
              name="number"
              id={dataId}
              placeholder="Phone"
            />
            <ErrorMessage className={css.span} name="number" component="span" />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
