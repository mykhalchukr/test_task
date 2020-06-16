import React from 'react';
import { NavLink } from 'react-router-dom';
export const SearchError = () => {

  return (
    <>
      <h1>Unfortunately, there is no such a person </h1>
      <NavLink to="/people">
        <button>Got to the people list</button>
      </NavLink>
    </>
  );
};