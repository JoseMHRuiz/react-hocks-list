import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import courseStore from '../stores/courseStore';
import trainerStore from '../stores/trainerStore';
import CourseList from './courseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';
import { loadTrainers } from '../actions/trainerActions';

const CoursePage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [trainers, setTrainers] = useState(trainerStore.getTrainers());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    trainerStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    if (trainerStore.getTrainers().length === 0) loadTrainers();
    return () => {
      courseStore.removeChangeListener(onChange);
      trainerStore.removeChangeListener(onChange);
    };
  }, []);
  const trainerName = id => {
    let [trainerNameFind] = trainers.filter(_trainer => _trainer.id === id);
    return trainerNameFind && trainerNameFind.name;
  };

  const onChange = () => {
    setCourses(courseStore.getCourses());
    setTrainers(trainerStore.getTrainers());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/course'>
        Add Course
      </Link>
      <CourseList
        courses={courses}
        trainers={trainers}
        trainerName={trainerName}
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
      trainerId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};
