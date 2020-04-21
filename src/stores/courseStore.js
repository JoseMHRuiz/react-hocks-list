import { EventEmitter } from 'events';
import Dispatcher from '../appDispacher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];
console.log(CHANGE_EVENT)

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    console.log('add course')

    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    console.log('remove course')

    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    console.log(_courses)
    console.log(slug)
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        course => course.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    default:
  }
});

export default store;
