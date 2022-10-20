import React from 'react';
import './Main.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Terminosycondiciones from './pages/terminos-y-condiciones';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={
              <Home/>
            }
          />
          <Route exact path="/terminos-y-condiciones" element={
              <Terminosycondiciones/>
            }
          />
      </Routes>
    </Router>
  );
}

export default App;