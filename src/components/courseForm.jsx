import React from 'react';
import TextInput from './common/textInput';

const CourseForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='title'
        label='Title'
        type='text'
        name='title'
        onChange={props.onChange}
        className='form-control'
        value={props.course.title}
        error={props.errors.title}
      />

      <div className='form-group'>
        <label htmlFor='author'>Author</label>
        <div className='field'>
          <select
            id='author'
            name='authorId'
            value={props.course.authorId || ''}
            onChange={props.onChange}
            className='form-control'
          >
            <option value='' />
            {props.authors.map(_author => {
              return (
                <option key={_author.id} value={_author.id}>
                  {_author.name}
                </option>
              );
            })}
          </select>
        </div>
        {props.errors.authorId && (
          <div className='alert alert-danger'>{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        type='text'
        label='Category'
        id='category'
        name='category'
        className='form-control'
        value={props.course.category}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type='submit' value='Save' className='btn btn-primary' />
    </form>
  );
};

export default CourseForm;
