import css from '../Button/Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button className={css.button} onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;
