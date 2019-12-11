import React from 'react';
import './App.css';
import publications from '../data/publications';
import Reader from '../Reader/Reader';

function App() {
  return (
    <div className="App">
      <Reader items={publications} />
    </div>
  );
}

export default App;
