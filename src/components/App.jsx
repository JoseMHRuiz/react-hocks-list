import React from 'react';
import AboutPage from './aboutPage';
import HomePage from './homePage';
import Header from './common/header';
import CoursePage from './coursesPage';
import TrainerPage from './trainersPage';
import ManageCoursePage from './manageCoursePage';
import ManageTrainerPage from './manageTrainerPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './notFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='container-fluid'>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/courses' component={CoursePage} />
        <Route path='/trainers' component={TrainerPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/course/:slug' component={ManageCoursePage} />
        <Route path='/course' component={ManageCoursePage} />
        <Route path='/trainer/:id' component={ManageTrainerPage} />
        <Route path='/trainer' component={ManageTrainerPage} />
        <Redirect from='/about-page' to='/about' />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};
export default App;
