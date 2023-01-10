import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchForm,
  InputForm,
  ButtonForm,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    desiredImage: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.desiredImage.trim() === '') {
      return toast.error('Pleas enter image name!');
    }
    this.props.onSubmit(this.state.desiredImage);
    this.setState({ desiredImage: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonForm type="submit"></ButtonForm>
          <InputForm
            type="text"
            name="desiredImage"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.desiredImage}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
