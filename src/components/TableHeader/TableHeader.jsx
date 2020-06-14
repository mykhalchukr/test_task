import React from 'react';

export const TableHeader = () => {

  const tableCaptions = ['Full Name', 'Photo', 'Email', 'dob'];

  return (
    <thead>
      <tr>
        {tableCaptions.map(cellName => <th>{cellName}</th>)}
      </tr>
    </thead>
  );
};