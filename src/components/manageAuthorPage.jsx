import React, { useState, useEffect } from 'react';
import AuthorForm from './authorForm';
import authorStore from '../stores/authorStore';
import { toast } from 'react-toastify';
import * as authorActions from '../actions/authorActions';

const ManageAuthorPage = props => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [author, setAuthor] = useState({
      id: undefined,
      name: ''
  });

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    const id = Number(props.match.params.id);
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (id) {
      setAuthor(authorStore.getAuthorsById(id));
    }
    // return () => authorStore.removeChangeListener(onChange);
  }, [authors.length, props.match.params.id]);

  const onChange = () => {
    setAuthors(authorStore.getAuthors());
  };

  const handleChange = event => {
    const updatedAuthor = {
      ...author,
      [event.target.name]: event.target.value
    };
    setAuthor(updatedAuthor);
  };
  const formIsValid = () => {
    const _errors = {};
    if (!author.name) _errors.name = 'Name is required';
    setErrors(_errors);
    //Form is valid is there is no errors, object is empty
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    authorActions.saveAuthor(author).then(() => {
      props.history.push('/authors');
      toast.success('Author saved.');
    });
  };
  return (
    <>
      <h2>Manage Course</h2>
      <AuthorForm
        errors={errors}
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <Prompt
        when={true}
        message='Are you sure you want to save this?'
      ></Prompt> */}
    </>
  );
};
export default ManageAuthorPage;
