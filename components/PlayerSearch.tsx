// PlayerSearch.tsx
"use client"; // To indicate that this is a client-side component

import { useState } from "react";
import { Player } from "../types"; // Import the Player type from the shared types file

interface PlayerSearchProps {
  players: Player[];
  setFilteredPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const PlayerSearch = ({ players, setFilteredPlayers }: PlayerSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    const filtered = players.filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.currentclub.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name, country, or club..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        className="w-full sm:w-80 px-4 py-2 border rounded-lg bg-neutral-800 text-white placeholder:text-neutral-400"
      />
    </div>
  );
};

export default PlayerSearch;
