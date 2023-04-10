import {
  ContactLi,
  ContactBtn,
} from 'components/ContactList/ContactList.styled';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ContactListItems = ({ contacts, deleteContact }) => {
  return contacts.map(item => {
    return (
      <ContactLi key={item.name}>
        <span>
          {item.name}: {item.number}
        </span>
        <ContactBtn type="button" onClick={() => deleteContact(item.name)}>
          <FaWindowClose />
        </ContactBtn>
      </ContactLi>
    );
  });
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
