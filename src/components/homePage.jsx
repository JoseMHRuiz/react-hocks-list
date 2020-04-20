import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='jumbotron'>
    <h1>PluralSigh Administration</h1>
    <p>React, Flux, React Router for ultra-responsive web-apps</p>
    <Link to='/about' className='btn btn-primary'>
      About
    </Link>
  </div>
);

export default HomePage;
