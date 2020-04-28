import React, { useState, useEffect } from 'react';
import CourseForm from './courseForm';
import courseStore from '../stores/courseStore';
import trainerStore from '../stores/trainerStore';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';
import * as trainerActions from '../actions/trainerActions';

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [trainers, setTrainers] = useState(trainerStore.getTrainers());
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    titlle: '',
    trainerId: null,
    category: ''
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    trainerStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
      trainerActions.loadTrainers();
    } else if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
    return () => {
      trainerStore.removeChangeListener(onChange);
      courseStore.removeChangeListener(onChange)};
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
    setTrainers(trainerStore.getTrainers());
  };

  const handleChange = event => {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  };
  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = 'Title is required';
    if (!course.trainerId) _errors.trainerId = 'Trainer is required';
    if (!course.category) _errors.category = 'Category is required';

    setErrors(_errors);
    //Form is valid is there is no errors, object is empty
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Course saved.');
    });
  };

  //this is the same
  // const handleChange2 = ({ target }) => { //destructurin target inline
  //   setCourse({ //set the function inline
  //     ...course,
  //     [target.name]: target.value
  //   });
  // };
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        trainers={trainers}
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
export default ManageCoursePage;
