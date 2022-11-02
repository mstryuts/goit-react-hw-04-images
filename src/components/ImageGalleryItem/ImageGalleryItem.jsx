import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ webformatURL, largeImageURL, tags }) => (
        <li className={css.item} key={nanoid()}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.imgItem}
            onClick={() => onClick(largeImageURL)}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
