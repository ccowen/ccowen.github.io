import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WovenTimeArticle from './components/WovenTimeArticle';
import WovenTimeArticleInteractive from './components/WovenTimeArticlelnteractive';
import './App.css';
import HomePage from './components/HomePage';

function App() {

  
  return (
    <Router>
      <div className='App-header'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/woven-time" element={<WovenTimeArticle/>} />
          <Route path="/woven-time/interactive" element={<WovenTimeArticleInteractive/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
