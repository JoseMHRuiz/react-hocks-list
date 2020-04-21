import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import authorStore from '../stores/authorStore';
import { Link } from 'react-router-dom';
import { loadAuthors, deleteAuthor } from '../actions/authorActions';
import AuthorList from './authorList';

const AuthorPage = () => {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      authorStore.removeChangeListener(onChange);
    };
  }, []);

  const onChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/author'>
        Add Author
      </Link>
      <AuthorList
        authors={authors}
        deleteAuthor={deleteAuthor}
      />
    </>
  );
};

export default AuthorPage;

AuthorList.propTypes = {
  name: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
