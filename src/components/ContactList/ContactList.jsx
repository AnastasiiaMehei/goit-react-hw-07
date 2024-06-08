import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <li className={css.li} key={contact.id}>
          <Contact
            // id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
