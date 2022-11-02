import { useEffect } from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onClick, imgSrc }) => {
  useEffect(() => {
    const handleEscPush = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    document.addEventListener('keydown', handleEscPush);
    return () => {
      document.removeEventListener('keydown', handleEscPush);
    };
  }, [onClick]);

  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClick();
    }
  };

  return (
    <>
      <div className={css.overlay} onClick={handleOverlayClick}>
        <div className={css.modal}>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string,
};
