import React, { useEffect } from 'react';
import { Switch, Route, useLocation, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { handleSearchQuery } from '../src/store/filterData';
import { SignIn } from './components/SignIn/SignIn';
import { PeopleList } from './components/PeopleList/PeopleList';
import { PersonProfile } from './components/PersonProfile/PersonProfile';
import { SearchError } from './components/SearchError/SearchError';
import { setSortType } from './store/sortType';

function App() {

  const inputedData = useSelector(state => state.filterData);
  const peopleList = useSelector(state => state.peopleData);
  const sortType = useSelector(state => state.sortBy);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.clear();
    }
  }, [location]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">people table data</h1>
        <NavLink to="/">
          <button type='button' className="header__button button">Go Back</button>
        </NavLink>
        <input
          className="header__input"
          type="text"
          name="Filter by Surname"
          id="filter"
          placeholder="filter by surname"
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
      </header>
      <main className="main">
        <Switch>
          <Route path='/' component={SignIn} exact />
          <Route path='/people' component={PeopleList} />
          <Route
            path='/profile/:id'
            render={(routeProps) => {
              const currentPerson = peopleList
                .find(person => person.login.uuid === routeProps.match.params.id);
              return currentPerson ?
                <PersonProfile personData={currentPerson} /> :
                <SearchError />
            }}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
