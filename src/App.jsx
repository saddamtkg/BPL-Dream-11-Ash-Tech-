import { Suspense } from 'react';
import HeroSection from './Componants/HomePage/HeroSection';
import PlayersAvailable from './Componants/HomePage/PlayersAvailable';
import Navbar from './Componants/Navbar/Navbar';

const fetchPlayer = async () => {
  const res = await fetch('/players.json');
  return res.json();
};

const playersPromise = fetchPlayer();

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-xl text-lime-500"></span>
          </div>
        }
      >
        <PlayersAvailable playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
