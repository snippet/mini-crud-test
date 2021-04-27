import './App.css';

import React, { useState, useEffect } from 'react';
import List from './Components/List';

function App() {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    });

  return (
    <div className="App">
      <List users={users}/>
    </div>
  );
}

export default App;
