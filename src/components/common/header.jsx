import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'orange' };
const Header = () => (
  <nav>
    <NavLink activeStyle={activeStyle} exact to='/'>
      Home
    </NavLink>
    {' | '}
    <NavLink activeStyle={activeStyle} to='/courses'>
      Courses
    </NavLink>
    {' | '}
    <NavLink activeStyle={activeStyle} to='/authors'>
      Authors
    </NavLink>
    {' | '}
    <NavLink activeStyle={activeStyle} to='/about'>
      About
    </NavLink>
  </nav>
);
export default Header;