import { Component } from 'react';
import GlobalStyle from '../GlobalStyle';
import { AppStyle } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import FetchImage from './Service/ApiPixabay';
import Loader from './Loader';
import Button from './Button';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    desiredImage: '',
    page: 1,
    images: [],
    status: Status.IDLE,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.desiredImage !== this.state.desiredImage ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: Status.PENDING });
      FetchImage(this.state.desiredImage, this.state.page)
        .then(hits => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: Status.RESOLVED,
          }));
          return toast.info('success');
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  handleClick = () => {
    this.setState({ page: this.state.page + 1 });
    FetchImage(this.state.desiredImage, this.state.page + 1);
  };

  handleFormSubmit = desiredImage => {
    this.setState({ desiredImage });
  };

  render() {
    const { images, status } = this.state;
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="colored"
          />
          <Searchbar onSubmit={this.handleFormSubmit} />
          {status === 'pending' && <Loader />}
          <ImageGallery images={images} />
          {status === 'resolved' && <Button onClick={this.handleClick} />}
        </AppStyle>
      </>
    );
  }
}

export default App;
