import './App.css';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Profile from './components/Profile';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <div id='home'>
      <Hero />
      </div>

      <div id='profile'>
      <Profile />
      </div>
      <div id='information' className='mt-32'>
        <Schedule />
      </div>

      <div id='contact' className='pt-20'>
        <Contact />
      </div>
      
      <div className='bg-[#F33E3E] p-3 text-white'>
        <p>&copy; 2021 SMP Mitra Bintaro Islamic School</p>
      </div>
    </div>
  );
}

export default App;