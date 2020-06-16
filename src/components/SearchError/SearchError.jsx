import React from 'react';
import './SearchError.scss';
import { NavLink } from 'react-router-dom';
export const SearchError = () => {

  return (
    <>
      <h1 className="main__error-page">Unfortunately, there is no such a person </h1>
      <NavLink to="/people" className="main__error-button-link">
        <button className="button main__error-button">Got to the people list</button>
      </NavLink>
    </>
  );
};