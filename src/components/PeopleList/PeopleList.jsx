import React, { useEffect } from 'react';
import { getDataFromServer } from '../../helpers/api';
import { useDispatch, useSelector } from 'react-redux';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';

export const PeopleList = () => {
  const dispatch = useDispatch();
  const inputedData = useSelector(state => state.filterData);
  const sortType = useSelector(state => state.sortBy);
  
  useEffect(() => {
    const getPeopleList = async () => {
      const { data } = await getDataFromServer();

      dispatch({ type: 'LOAD_DATA_FROM_SERVER', list: data.results })
    };
    getPeopleList();
  }, [dispatch]);

  return (
    <>
      <input
        type="text"
        name="Filter by Surname"
        id=""
        value={inputedData}
        onChange={(event) => {
          const { value } = event.target;
          dispatch({ type: 'FILTER_BY_SURNAME', surname: value });
        }}
      />
      <select onChange={(e)=> {
        const {value} = e.target;
        dispatch({type: 'SET_SORT_TYPE', sortType: value});
      }} defaultValue={sortType}>
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