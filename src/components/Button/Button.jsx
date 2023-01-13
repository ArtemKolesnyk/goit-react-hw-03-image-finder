import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

const Button = ({ loadMore }) => {
  return (
    <BtnLoadMore type="button" onClick={loadMore}>
      Load more
    </BtnLoadMore>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
export default Button;
