import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Profile from './components/Profile';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Hero />
      <Profile />
      <div className='pt-20'>
        <Schedule />
      </div>

      <div className='pt-20'>
        <Contact />
      </div>
    </div>
  );
}

export default App;