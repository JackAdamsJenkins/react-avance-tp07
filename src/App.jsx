import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À Propos</Link>
            </li>
            <li>
              <Link to="/dashboard">Tableau de Bord</Link>
            </li>
          </ul>
        </nav>

        {/* 
          SCÉNARIO: Cette partie "Switch" est spécifique à React Router v5.
          Elle cassera lors de la mise à jour vers v6.
        */}
        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
