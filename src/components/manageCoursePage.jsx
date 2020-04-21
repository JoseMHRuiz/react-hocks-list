import React, { useState, useEffect } from 'react';
import CourseForm from './courseForm';
import courseStore from '../stores/courseStore';
import authorStore from '../stores/authorStore';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';
import * as authorActions from '../actions/authorActions';

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    titlle: '',
    authorId: null,
    category: ''
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    authorStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
      authorActions.loadAuthors();
    } else if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
    return () => {
      authorStore.removeChangeListener(onChange);
      courseStore.removeChangeListener(onChange)};
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
    setAuthors(authorStore.getAuthors());
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
    if (!course.authorId) _errors.authorId = 'Author is required';
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
        authors={authors}
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
