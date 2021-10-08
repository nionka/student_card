import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardStudent from './components/CardStudent/CardStudent';
import CardForm from './components/CardForm/CardForm';

function App() {
  return (  
    <Router>
      <Route exact path='/' component={CardStudent} />
      <Route path='/form' component={CardForm} />
    </Router>
  );
}

export default App;
