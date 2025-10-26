// components/PlayerForm.tsx
"use client";
import React, { useState } from "react";
import axios from "axios";

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

interface PlayerFormProps {
  player?: Player; // Optional because we can handle both new and existing players
}

const PlayerForm = ({ player }: PlayerFormProps) => {
  const [name, setName] = useState(player?.name || "");
  const [imagepath, setImagepath] = useState(player?.imagepath || "");
  const [totalgoals, setTotalgoals] = useState(player?.totalgoals || 0);
  const [totalassists, setTotalassists] = useState(player?.totalassists || 0);
  const [currentclub, setCurrentclub] = useState(player?.currentclub || "");
  const [age, setAge] = useState(player?.age || 0);
  const [country, setCountry] = useState(player?.country || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const url = player
        ? `/api/player/update/${player.id}`
        : `/api/player/create`;

      const response = await axios.post(url, {
        name,
        imagepath,
        totalgoals,
        totalassists,
        currentclub,
        age,
        country,
      });

      if (response.data.success) {
        setMessage(
          player
            ? "✅ Player updated successfully!"
            : "✅ Player created successfully!"
        );
        setName("");
        setImagepath("");
        setTotalgoals(0);
        setTotalassists(0);
        setCurrentclub("");
        setAge(0);
        setCountry("");
      }
    } catch (error: any) {
      console.error("Error submitting player data:", error);
      setMessage("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Player Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="url"
          value={imagepath}
          onChange={(e) => setImagepath(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Total Goals</label>
        <input
          type="number"
          value={totalgoals}
          onChange={(e) => setTotalgoals(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Total Assists</label>
        <input
          type="number"
          value={totalassists}
          onChange={(e) => setTotalassists(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Current Club</label>
        <input
          type="text"
          value={currentclub}
          onChange={(e) => setCurrentclub(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : player ? "Update Player" : "Create Player"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default PlayerForm;
