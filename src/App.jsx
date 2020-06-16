import React, { useEffect } from 'react';
import { Switch, Route, useLocation, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { SignIn } from './components/SignIn/SignIn';
import { PeopleList } from './components/PeopleList/PeopleList';
import { PersonProfile } from './components/PersonProfile/PersonProfile';
import { SearchError } from './components/SearchError/SearchError';

function App() {

  const peopleList = useSelector(state => state.peopleData);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.clear();
    }
  }, [location]);

  return (
    <div className="App">
      <header>
        <NavLink to="/">
          <button type='button'>Go Back</button>
        </NavLink>
      </header>
      <main>
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
