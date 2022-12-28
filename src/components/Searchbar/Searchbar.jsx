import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  InputForm,
  ButtonForm,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader onSubmit={onSubmit} className="searchbar">
      <SearchForm>
        <ButtonForm></ButtonForm>
        <InputForm
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
