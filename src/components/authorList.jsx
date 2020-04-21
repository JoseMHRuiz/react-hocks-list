import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthorList = props => {
  console.log(props)
  return (
    <>
      <h2>Authors</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Author ID</th>
          </tr>
        </thead>
        <tbody>
          {props.authors.map(author => {
            return (
              <tr key={author.name}>
                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => {
                      props.deleteAuthor(author.id);
                      toast.error('Author deleted.');
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={'/author/' + author.id}>{author.name}</Link>
                </td>
                <td>{author.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default AuthorList;
