import React, { useEffect } from 'react';
import { getDataFromServer } from '../../helpers/api';
import { useDispatch, useSelector } from 'react-redux';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import { handleDataLoading } from '../../store/peopleData';
import { handleSearchQuery } from '../../store/filterData';
import { setSortType } from '../../store/sortType';

export const PeopleList = () => {

  const dispatch = useDispatch();
  const inputedData = useSelector(state => state.filterData);
  const sortType = useSelector(state => state.sortBy);

  useEffect(() => {
    const getPeopleList = async () => {
      const { data } = await getDataFromServer();

      dispatch(handleDataLoading(data.results));
    };
    getPeopleList();
  }, [dispatch]);

  return (
    <>
      <input
        type="text"
        name="Filter by Surname"
        id="filter"
        value={inputedData}
        onChange={(event) => {
          const { value } = event.target;
          dispatch(handleSearchQuery(value));
        }}
      />
      <select
        defaultValue={sortType}
        onChange={(e) => {
          const { value } = e.target;
          dispatch(setSortType(value));
        }}
      >
        <option value="">Sort By</option>
        <option value="surname">Surname</option>
        <option value="age">Age</option>
      </select>
      <table className="table">
        <caption className="table__capture">People table</caption>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
};