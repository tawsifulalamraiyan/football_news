// PlayerList.tsx
import { useState } from "react";
import Image from "next/image";
import PlayerSearch from "./PlayerSearch";
import Link from "next/link";
import { Player } from "../types"; // Import from the shared types file

interface PlayerListProps {
  players: Player[];
}

const PlayerList = ({ players }: PlayerListProps) => {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players);

  return (
    <div>
      <PlayerSearch players={players} setFilteredPlayers={setFilteredPlayers} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-neutral-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={player.imagepath}
                  width={200}
                  height={128}
                  alt={player.name}
                  className=" object-cover "
                />
              </div>
              <h2 className="text-xl font-semibold text-center text-white">
                {player.name}
              </h2>
              <p className="text-center text-neutral-400">
                {player.currentclub}
              </p>
              <div className="flex justify-between mt-4 text-sm text-neutral-300">
                <span>{player.age} years</span>
                <span>{player.country}</span>
              </div>

              <Link
                href={`/players/${player.id}`}
                className="mt-4 w-full bg-neutral-900 text-white py-2 rounded-full hover:bg-neutral-900/80 text-center block"
              >
                Details
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white py-6">
            No players found.
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerList;
