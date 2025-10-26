"use client";

import React, { useState } from "react";
import axios from "axios";

export default function PlayerForm() {
  const [name, setName] = useState<string>("");
  const [imagepath, setImagepath] = useState<string>("");
  const [totalgoals, setTotalgoals] = useState<number>(0);
  const [totalassists, setTotalassists] = useState<number>(0);
  const [currentclub, setCurrentclub] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [country, setCountry] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("/api/player/create", {
        name,
        imagepath,
        totalgoals,
        totalassists,
        currentclub,
        age,
        country,
      });

      if (response.data.success) {
        setMessage("✅ Player data created successfully!");
        setName("");
        setImagepath("");
        setTotalgoals(0);
        setTotalassists(0);
        setCurrentclub("");
        setAge(0);
        setCountry("");
      }
    } catch (error: any) {
      console.error("Error creating player data:", error);
      const errMsg =
        error.response?.data?.error || "Something went wrong. Try again.";
      setMessage(`❌ ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  py-12 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full shadow-lg rounded-lg p-8 space-y-6"
      >
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Create Player Data
        </h1>

        {/* Player Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Player Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="url"
            name="imagepath"
            value={imagepath}
            onChange={(e) => setImagepath(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Total Goals */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Total Goals
          </label>
          <input
            type="number"
            name="totalgoals"
            value={totalgoals}
            onChange={(e) => setTotalgoals(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={0}
          />
        </div>

        {/* Total Assists */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Total Assists
          </label>
          <input
            type="number"
            name="totalassists"
            value={totalassists}
            onChange={(e) => setTotalassists(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={0}
          />
        </div>

        {/* Current Club */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Current Club
          </label>
          <input
            type="text"
            name="currentclub"
            value={currentclub}
            onChange={(e) => setCurrentclub(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={16}
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-pulse">Submitting...</span>
          ) : (
            "Submit"
          )}
        </button>

        {/* Message */}
        {message && (
          <p
            className={`text-center mt-2 ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
