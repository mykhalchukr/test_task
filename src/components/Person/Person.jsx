import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

export const Person = ({ personProfile }) => {
  const { name, email, dob, picture } = personProfile;

  const getDateFromISO = (dateFromServer) => {
    let momentDate = moment(dateFromServer, 'YYYY-MM-DD');
    let jsDate = momentDate.toDate();
    return jsDate.toLocaleDateString();
  };

  return (
    <tr>
      <td>{`${name.first} ${name.last}`}</td>
      <td><img src={picture.medium} alt={name.first} /></td>
      <td>{email}</td>
      <td>{getDateFromISO(dob.date)}</td>
      <td>
        <NavLink
          to={`profile/${personProfile.login.uuid}`}
          onClick={() => console.log('more')}>
          More Info
          </NavLink>
      </td>
    </tr>
  );
};
