import { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import { AppStyle } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

// import Loader from './Loader';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <Searchbar />
          <ImageGallery />
          <Button />
          {/* <Loader /> */}
        </AppStyle>
      </>
    );
  }
}

export default App;
