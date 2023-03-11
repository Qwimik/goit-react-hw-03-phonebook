import { ContactListItems } from 'components/ContactList/ContactListItems';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <ContactListItems contacts={contacts} deleteContact={deleteContact} />
    </ul>
  );
};
