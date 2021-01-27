import './App.css';
import React from 'react';

import Main from './components/Main';

//mock state
import {  BrowserRouter } from 'react-router-dom';

const JOB_API_URL = 'http://localhost:3001/jobs';


function App() {
  
  return (
    <BrowserRouter>
    
      <Main />
      
    </BrowserRouter>


  );
}

export default App;
