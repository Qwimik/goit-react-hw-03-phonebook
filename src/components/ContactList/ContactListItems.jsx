export const ContactListItems = ({ contacts, deleteContact }) => {
  return contacts.map(item => {
    return (
      <li key={item.name}>
        {item.name}: {item.number}
        <button type="button" onClick={() => deleteContact(item.name)}>
          Delete
        </button>
      </li>
    );
  });
};
