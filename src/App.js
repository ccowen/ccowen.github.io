import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WovenTimeArticle from './components/WovenTimeArticle';
import WovenTimeArticleInteractive from './components/pages/woven-time/WovenTimeArticlelnteractive';
import WovenTimeArticleNew from './components/pages/WovenTimeArticleNew';
import './App.css';
import HomePage from './components/pages/HomePage';

function App() {

  
  return (
    <Router>
      <div className='App-header'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/woven-time" element={<WovenTimeArticle/>} />
          <Route path="/woven-time/interactive" element={<WovenTimeArticleInteractive/>} />
          <Route path="/woven-time-new" element={<WovenTimeArticleNew/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
