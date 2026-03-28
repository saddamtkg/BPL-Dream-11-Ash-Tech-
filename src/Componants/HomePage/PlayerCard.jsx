import React from 'react';
import { FaFlag, FaUserLarge } from 'react-icons/fa6';

const PlayerCard = ({ player }) => {
  console.log(player);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="h-85 w-full max-w-full object-cover"
            src={player.image}
            alt={player.name}
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 items-center">
            <FaUserLarge className="text-[18px]" />
            <h2 className="text-xl font-bold">{player.name}</h2>
          </div>
          <div className="flex justify-between items-center text-[16px] text-[#131313]">
            <span className="flex gap-2 items-center text-[#868686]">
              <FaFlag />
              <p>{player.country}</p>
            </span>
            <span className="text-[14px] font-semibold py-1.5 px-2.5 rounded-[5px] hover:text-amber-600 duration-300 bg-[#D9D9D9]">
              {player.role}
            </span>
          </div>
          <div className="divider my-2"></div>
          <div>
            <p className="text-[16px] font-semibold">Rating: {player.rating}</p>
            <span className="flex justify-around items-center mt-2 text-[14px] font-medium">
              <p className="text-left">
                {player.batStyle && player.batStyle !== 'N/A'
                  ? player.batStyle
                  : ''}
              </p>
              <p className="text-right">
                {player.bowlStyle && player.bowlStyle !== 'N/A'
                  ? player.bowlStyle
                  : ''}
              </p>
            </span>
          </div>
          <div className="flex justify-around items-center mt-3">
            <p className="text-[16px] font-semibold">Price: ${player.price}</p>
            <button className="btn btn-ghost btn-outline border-[#D9D9D9]">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
