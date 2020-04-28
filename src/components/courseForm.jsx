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
        <label htmlFor='trainer'>Trainer</label>
        <div className='field'>
          <select
            id='trainer'
            name='trainerId'
            value={props.course.trainerId || ''}
            onChange={props.onChange}
            className='form-control'
          >
            <option value='' />
            {props.trainers.map(_trainer => {
              return (
                <option key={_trainer.id} value={_trainer.id}>
                  {_trainer.name}
                </option>
              );
            })}
          </select>
        </div>
        {props.errors.trainerId && (
          <div className='alert alert-danger'>{props.errors.trainerId}</div>
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
