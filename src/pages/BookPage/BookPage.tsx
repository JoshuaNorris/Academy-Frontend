import React from 'react';
import NavigationBar from '../CommonComponents/NavigationBar';
import BookInfoComponent from './BookInfoComponent';
import BookRatingsComponent from './BookRatingsComponent';
import BookPlansComponent from './BookPlansCompenent';

const BookPage: React.FC = () => {

  return (
    <>
      <NavigationBar />
      <BookInfoComponent />
      <BookRatingsComponent />
      <BookPlansComponent />

    </>
  );
};

export default BookPage;