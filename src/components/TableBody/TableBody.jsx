import React from 'react';
import {Person} from '../Person/Person';
import { useSelector } from 'react-redux';

export const TableBody = () => {

  const peopleList = useSelector(state => state.peopleData);
  
  return (
    <tbody>
      {peopleList.map(person => <Person personProfile={person} key={person.login.uuid}/>)}
    </tbody>
  );
};