"use client";

import React, { useState } from "react";
import axios from "axios";

export default function NewsPage() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [imagepath, setImagepath] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("/api/news/create", {
        title,
        writer,
        imagepath,
        content,
      });

      if (response.data.success) {
        setMessage("✅ Post created successfully!");
        setTitle("");
        setWriter("");
        setImagepath("");
        setContent("");
      }
    } catch (error: any) {
      console.error("Error creating post:", error);
      const errMsg =
        error.response?.data?.error || "Something went wrong. Try again.";
      setMessage(`❌ ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto shadow-md rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-800">
          Create a News Post
        </h1>

        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Writer</label>
          <input
            type="text"
            placeholder="writter"
            name="writer"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
            className="w-full border rounded-xl px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="imagepath"
            value={imagepath}
            onChange={(e) => setImagepath(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded-xl px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            placeholder="write content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 h-32"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded-full hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

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
