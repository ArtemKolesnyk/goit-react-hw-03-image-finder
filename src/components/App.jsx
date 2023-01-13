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
import ErrorBox from './ErrorBox';

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
        .then(({ total, hits }) => {
          if (total === 0) {
            this.setState({ status: Status.REJECTED });
            return toast.error(
              `Sorry, nothing not found ${this.state.desiredImage}`
            );
          }
          this.setState({ status: Status.RESOLVED });
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          }));
        })
        .catch(error => {
          this.setState({ error, status: Status.REJECTED });
        });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = e => {
    this.setState({
      desiredImage: e,
      images: [],
      page: 1,
      status: Status.IDLE,
    });
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
          {images !== [] && status === 'resolved' && (
            <Button loadMore={this.loadMore} />
          )}
          {status === 'rejected' && <ErrorBox />}
        </AppStyle>
      </>
    );
  }
}

export default App;
