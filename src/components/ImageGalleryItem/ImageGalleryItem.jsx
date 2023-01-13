import Modal from 'components/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  hadleChange = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.hadleChange}
        />
        {this.state.isOpenModal && (
          <Modal
            onClose={this.hadleChange}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
