import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.paragraphDiv}>
        <p className={css.paragraph}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p className={css.paragraph}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
