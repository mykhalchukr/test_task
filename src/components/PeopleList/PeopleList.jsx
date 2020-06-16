import React, { useEffect } from 'react';
import './PeopleList.scss';
import { getDataFromServer } from '../../helpers/api';
import { useDispatch } from 'react-redux';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import { handleDataLoading } from '../../store/peopleData';

export const PeopleList = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    const getPeopleList = async () => {
      const { data } = await getDataFromServer();

      dispatch(handleDataLoading(data.results));
    };
    getPeopleList();
  }, [dispatch]);

  return (
    <>
      <table className="table">
        <caption className="table__capture">People table</caption>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
};