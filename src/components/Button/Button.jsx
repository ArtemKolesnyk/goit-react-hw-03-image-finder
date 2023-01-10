import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

const Button = ({ handleClick }) => {
  return (
    <BtnLoadMore type="button" onClick={() => handleClick()}>
      Load more
    </BtnLoadMore>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Button;
