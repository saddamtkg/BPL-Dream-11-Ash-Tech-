import React from 'react';
import { FaFlag, FaUserLarge } from 'react-icons/fa6';

const PlayerCard = ({ player }) => {
  return (
    <div>
      <div className="grid-card card bg-base-100 shadow-sm">
        <figure className="card__img-wrap">
          <img
            className="grid-card__img h-60 w-full max-w-full object-cover"
            src={player.player.image}
            alt={player.player.name}
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 items-center">
            <FaUserLarge className="text-[18px]" />
            <h2 className="text-xl font-bold">{player.player.name}</h2>
          </div>
          <div className="flex justify-between items-center text-[16px] text-[#131313]">
            <span className="flex gap-2 items-center text-[#868686]">
              <FaFlag />
              <p>{player.player.country}</p>
            </span>
            <span className="text-[14px] font-semibold py-1.5 px-2.5 rounded-[5px] hover:text-amber-600 duration-300 bg-[#D9D9D9]">
              {player.player.role}
            </span>
          </div>
          <div className="divider my-2"></div>
          <div>
            <p className="text-[16px] font-semibold">
              Rating: {player.player.rating}
            </p>
            <span className="flex justify-around items-center mt-2 text-[14px] font-medium">
              <p className="text-left">
                {player.player.batStyle && player.player.batStyle !== 'N/A'
                  ? player.player.batStyle
                  : ''}
              </p>
              <p className="text-right">
                {player.player.bowlStyle && player.player.bowlStyle !== 'N/A'
                  ? player.player.bowlStyle
                  : ''}
              </p>
            </span>
          </div>
          <div className="flex justify-around items-center mt-3">
            <p className="text-[16px] font-semibold">
              Price: ${player.player.price}
            </p>
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
