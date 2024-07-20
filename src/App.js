import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Здесь можно добавить другие маршруты для других страниц */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
