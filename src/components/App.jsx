import { useState, useEffect } from 'react';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from './Api';
import Loader from './Loader/Loader';

import Modal from './Modal/Modal';

const App = () => {
  const [searchImgValue, setSearchImgValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImg, setLargeImg] = useState('');
  const [totalPages, setTotalPages] = useState(null);

  const onSearch = searchValue => {
    if (searchValue !== searchImgValue) {
      setSearchImgValue(searchValue);
      setImages([]);
      setPage(1);
    }
  };

  useEffect(() => {
    if (searchImgValue === '') {
      return;
    }

    setIsLoading(true);
    const fetchData = async (q, page) => {
      try {
        const data = await fetchImages(q, page);

        setImages(s => [...s, ...data.hits]);
        setTotalPages(data.total);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(searchImgValue, page);
  }, [searchImgValue, page]);

  const loadMore = () => {
    setPage(s => s + 1);
  };

  const toggleModal = () => {
    setLargeImg('');
  };
  const getLargeImg = url => {
    setLargeImg(url);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSearch} />
      {error && <h1>{error}</h1>}
      <ImageGallery images={images} onClick={getLargeImg} />
      {isLoading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      {!isLoading && images.length > 0 && totalPages > images.length && (
        <Button loadMore={loadMore} />
      )}

      {largeImg && <Modal onClick={toggleModal} imgSrc={largeImg}></Modal>}
    </div>
  );
};

export default App;
