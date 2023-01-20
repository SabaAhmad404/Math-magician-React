import './Styles/app.css';
import './Styles/index.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './components/logic/calculate';
import './components/logic/operate';
import Calsection from './components/Calsection';
import Home from './components/Home';
import Quotes from './components/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="navs">
          <h1>Math Magicians</h1>
          <div className="links">
            <Link to="/Home"> Home </Link>
            <Link to="/Quotes"> Quotation</Link>
            <Link to="/Calculator"> Calculator </Link>
          </div>
        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Calculator" element={<Calsection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
