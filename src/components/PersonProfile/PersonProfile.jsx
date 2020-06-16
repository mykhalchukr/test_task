import React from 'react';
import './PersonProfile.scss';

export const PersonProfile = ({ personData }) => {

  const { picture, name, email, phone, location } = personData;
  return (
    <article>
      <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
      <img src={picture.large} alt={name.first} />
      <p>Mobile: {phone} </p>
      <p>Email: {email}</p>
      <p>{location.city}, {location.country}</p>
    </article>
  )
};
