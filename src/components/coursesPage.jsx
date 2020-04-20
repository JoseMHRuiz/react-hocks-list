import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import courseStore from '../stores/courseStore';
import authorStore from '../stores/authorStore';
import CourseList from './courseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';
import { loadAuthors } from '../actions/authorActions';

const CoursePage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    authorStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      courseStore.removeChangeListener(onChange);
      authorStore.removeChangeListener(onChange);
    };
  }, []);
  const authorName = id => {
    let [authorNameFind] = authors.filter(_author => _author.id === id);
    return authorNameFind && authorNameFind.name;
  };

  const onChange = () => {
    setCourses(courseStore.getCourses());
    setAuthors(authorStore.getAuthors());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Course
      </Link>
      <CourseList
        courses={courses}
        authors={authors}
        authorName={authorName}
        deleteCourse={deleteCourse}
      />
    </>
  );
};

export default CoursePage;

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};
