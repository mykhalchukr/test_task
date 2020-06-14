import React, {useEffect, useState} from 'react';
import './App.css';
import { SignIn } from './components/SignIn/SignIn';
import { PeopleList } from './components/PeopleList/PeopleList';

function App() {
	useEffect(() => localStorage.clear(), []);

  const [isLoggedIn, setLoginStatus] = useState(false);

  
  const handleLoginStatus = () => {
    setLoginStatus(true);
    localStorage.setItem('isLoggedIn', true);
  };

  return (
    <div className="App">
        <header>Header</header>
        <main>
          <SignIn handleLoginStatus={handleLoginStatus}/>
          {isLoggedIn && <PeopleList/>}
        </main>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
