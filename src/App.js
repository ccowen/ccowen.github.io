import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WovenTimeArticle from './components/WovenTimeArticle';
import './App.css';

function App() {

  
  return (
    <Router>
      <div className='App-header'>
        <Routes>
          <Route path="/woven-time" element={<WovenTimeArticle/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
