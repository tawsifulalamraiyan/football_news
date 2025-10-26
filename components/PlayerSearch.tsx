// components/PlayerSearch.tsx (Client Component)

"use client"; // To indicate that this is a client-side component

import { useState } from "react";

interface Player {
  id: number;
  name: string;
  currentclub: string;
  country: string;
}

interface PlayerSearchProps {
  players: Player[];
  setFilteredPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const PlayerSearch = ({ players, setFilteredPlayers }: PlayerSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter players based on search term (name, country, or current club)
  const handleSearch = (searchTerm: string) => {
    const filtered = players.filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.currentclub.toLowerCase().includes(searchTerm.toLowerCase())
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
