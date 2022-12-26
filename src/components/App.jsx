import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { AppStyle } from './App.styled';
import GlobalStyle from '../GlobalStyle';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <Searchbar />
          <ImageGallery />
        </AppStyle>
      </>
    );
  }
}

export default App;
