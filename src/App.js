// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

// css style
import './App.css';

// custom functions
import Store from './redux/Store';

// componenets
import Navigation from './components/Navigation';
import Divisions from './components/Divisions';
import AboutUs from './components/AboutUs';
import Workspace from './components/Workspace';


function App() {
  return (
    <Provider store = {Store}>
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Divisions/>} />
          <Route exact path='/divisions' element={<Divisions/>}/>
          <Route exact path='/about_us' element={<AboutUs/>}/>
          <Route exact path='/workspace' element={<Workspace/>}/>
        </Routes>
      </Router>      
    </Provider>
  );
}

export default App;
