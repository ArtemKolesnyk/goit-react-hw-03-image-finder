import { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  closeEscModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay onClick={this.closeModal}>
        <ModalImg>
          <img src={largeImageURL} alt={tags} />
        </ModalImg>
      </Overlay>
    );
  }
}

export default Modal;
