import React, { use } from 'react';
import PlayersAvailable from './PlayersAvailable';


const AllPlayers = ({ playersPromise }) => {
  const players = use(playersPromise)
  return (
    <>
      <div className="mt-10 my-container">
        <div className="mb-8 flex justify-between items-center">
          <h2>Available Players</h2>
          <div>
            <button className="btn">Available</button>
            <button className="btn">Selected (0)</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {
            players.map(player => (
              <PlayersAvailable key={player.id} player={player} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllPlayers;