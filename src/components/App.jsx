import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { AppStyle } from './App.styled';
import GlobalStyle from '../GlobalStyle';
import Loader from './Loader';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <Searchbar />
          <ImageGallery />
          <Loader />
        </AppStyle>
      </>
    );
  }
}

export default App;
