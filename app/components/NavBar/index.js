/**
 * Navbar displayed at top of app.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBarDiv from './Div';
import NavBarTitle from './Title';
import NavBarLink from './P';

export default function NavBar() {
  return (
    <NavBarDiv>
      <NavBarTitle>DMI String Depot</NavBarTitle>
      <NavBarLink>
        <NavLink
          exact
          to="/"
          activeStyle={{
            color: '#fff',
          }}
        >
          See the strings
        </NavLink>
      </NavBarLink>
      <NavBarLink>
        <NavLink
          exact
          to="/add"
          activeStyle={{
            color: '#fff',
          }}
        >
          Add a string
        </NavLink>
      </NavBarLink>
    </NavBarDiv>
  );
}
