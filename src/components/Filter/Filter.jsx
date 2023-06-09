import {
  FilterLabel,
  FilterSpan,
  FilterInput,
} from 'components/Filter/Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, filterContacts }) => {
  const handleChange = e => {
    filterContacts(e.target.value);
  };
  return (
    <div>
      <FilterLabel htmlFor="filter">
        <FilterSpan>Find contacts by name</FilterSpan>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterContacts: PropTypes.func,
};
