import PropTypes from 'prop-types';
import Button from 'components/Button';
import { SearchbarHeader, SearchForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader onSubmit={onSubmit} className="searchbar">
      <SearchForm>
        <Button />
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
