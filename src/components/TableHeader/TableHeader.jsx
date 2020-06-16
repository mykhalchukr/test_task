import React from 'react';

export const TableHeader = () => {

  const tableCaptions = ['Full Name', 'Photo', 'Email', 'dob'];

  return (
    <thead className="table__header">
      <tr className="table__header-row">
        {tableCaptions.map(cellName => <th
          key={`${cellName} ${new Date()}`}
          className="table__header-cell">
          {cellName}
        </th>)}
        <th className="table__header-cell">Details</th>
      </tr>
    </thead>
  );
};