import React from 'react';
import TextInput from './common/textInput';

const AuthorForm = props => {
    console.log(props)
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id='name'
        label='Name'
        type='text'
        name='name'
        onChange={props.onChange}
        className='form-control'
        value={props.author.name}
        error={props.errors.name}
      />
      <input type='submit' value='Save' className='btn btn-primary' />
    </form>
  );
};

export default AuthorForm;
