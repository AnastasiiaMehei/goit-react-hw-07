import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <li className={css.li} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
