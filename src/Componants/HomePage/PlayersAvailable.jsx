import React, { use } from 'react';
import PlayerCard from './PlayerCard';

const PlayersAvailable = ({ playersPromise }) => {
  const allPlayer = use(playersPromise);
  console.log(allPlayer)
  return (
    <>
      <div className="mt-10 my-container">
        <div className='grid grid-cols-4 gap-8'>
          {allPlayer.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayersAvailable;
