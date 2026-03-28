import React from 'react';
import PlayerCard from './PlayerCard';

const PlayersAvailable = (player) => {
  console.log(player)
  return (
    <div>
      <PlayerCard player={player}/>
    </div>
  );
};

export default PlayersAvailable;