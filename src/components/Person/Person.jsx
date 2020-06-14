import React from 'react';
import moment from 'moment';

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
    </tr>
  );
};