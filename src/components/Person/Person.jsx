import React from 'react';
import moment from 'moment';
import './Person.scss';
import { NavLink } from 'react-router-dom';

export const Person = ({ personProfile }) => {
  const { name, email, dob, picture } = personProfile;

  const getDateFromISO = (dateFromServer) => {
    let momentDate = moment(dateFromServer, 'YYYY-MM-DD');
    let jsDate = momentDate.toDate();
    return jsDate.toLocaleDateString();
  };

  return (
    <tr className="table__person">
      <td className="table__person-cell">{`${name.first} ${name.last}`}</td>
      <td className="table__person-cell"><img src={picture.medium} alt={name.first} /></td>
      <td className="table__person-cell">{email}</td>
      <td className="table__person-cell">{getDateFromISO(dob.date)}</td>
      <td className="table__person-cell">
        <NavLink
          className="table__person-details-link"
          to={`profile/${personProfile.login.uuid}`}
          onClick={() => console.log('more')}>
          More Info
          </NavLink>
      </td>
    </tr>
  );
};
