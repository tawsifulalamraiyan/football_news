"use client";

import Link from "next/link";
import { useState } from "react";

// PlayerList Component for filtering players and displaying them
interface Player {
  id: number;
  name: string;
  imagepath: string;
  totalgoals: number;
  totalassists: number;
  currentclub: string;
  age: number;
  country: string;
}

interface PlayerListProps {
  players: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter players based on search query (client-side filtering)
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Players..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>

      {/* Render filtered players */}
      {filteredPlayers.length > 0 ? (
        filteredPlayers.map((item) => (
          <div
            key={item.id}
            className="player-item mb-6 p-6 border rounded shadow-md"
          >
            {/* Player Image */}
            <div className="mb-4">
              <img
                src={item.imagepath}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
            </div>

            {/* Player Details */}
            <h2 className="text-xl font-semibold text-center">{item.name}</h2>
            <p className="text-sm text-center text-gray-600">
              {item.currentclub}
            </p>
            <div className="mt-2 text-center text-gray-700">
              <p>Country: {item.country}</p>
            </div>
            <Link href={`/players/${item.id}`}>Details</Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No players found</p>
      )}
    </div>
  );
};

export default PlayerList;
