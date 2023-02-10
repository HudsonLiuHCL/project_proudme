import './App.css';
import React, { Component } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import LoginScreen from './screens/login.js';
import HomeScreen from './screens/home.js';
import SignUpScreen from './screens/signup.js';
import JournalScreen from './screens/journal/journal.js';
import EatingScreen from './screens/journal/eating.js';
import ActivityScreen from './screens/journal/activity.js';
import GalleryScreen from './screens/journal/gallery.js';
import PetScreen from './screens/pet/pet.js';
import PEScreen from './screens/pe/pe.js';

import Header from './components/header';

class App extends Component {

  render() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/project-proudme' element={<LoginScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signup' element={<SignUpScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/journal' element={<JournalScreen />} />
          <Route path='/eating' element={<EatingScreen />} />
          <Route path='/activity' element={<ActivityScreen />} />
          <Route path='/gallery' element={<GalleryScreen />} />
          <Route path='/pet' element={<PetScreen />} />
          <Route path='/pe' element={<PEScreen />} />
        </Routes>
      </HashRouter>
    </div>
  );
***REMOVED***
}

export default App;

// remove reflection tab on left pages
// set goals instead of view goals
// just eating, no drinking.
// want users to be able to input numbers and track their progress