import React from 'react';
import { Person } from '../Person/Person';
import { useSelector } from 'react-redux';

export const TableBody = () => {

  const peopleList = useSelector(state => state.peopleData);
  const searchQuery = useSelector(state => state.filterData);
  const sortType = useSelector(state => state.sortBy);

  const getSortedByParam = () => {
    switch(sortType) {
      case 'age':
        return (firstPerson, secondPerson) => {
          return firstPerson.dob.age - secondPerson.dob.age;
        };
      case 'surname':
        return (firstPerson, secondPerson) => {
         return firstPerson.name.last.localeCompare(secondPerson.name.last);
        };
      default:
        return;
    }
  };

  const getFilteredBySurname = () => {
    
  const normalizedQuery = searchQuery.toLowerCase();
    return peopleList
      .filter(person => {
        return person.name.last
        .toLowerCase()
        .includes(normalizedQuery);
    });
  };

const sortedList = getFilteredBySurname().sort(getSortedByParam());

  return (
   
  <tbody>
        {sortedList.map(person => <Person
          personProfile={person}
          key={person.login.uuid}
           />)}
      </tbody>
   
  );
};