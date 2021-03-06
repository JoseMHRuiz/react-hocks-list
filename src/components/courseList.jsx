import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CourseList = props => {
  return (
    <>
      <h2>Courses</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Trainer</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(course => {
            return (
              <tr key={course.id}>
                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => {
                      props.deleteCourse(course.id);
                      toast.error('Course deleted.');
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={'/course/' + course.slug}>{course.title}</Link>
                </td>
                <td>{props.trainerName(course.trainerId)}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default CourseList;
