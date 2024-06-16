"use client"; // Pastikan ini adalah baris pertama

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Menggunakan next/navigation
import { fetchLeaderboard } from "../../../lib/api";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function getLeaderboard() {
      try {
        const data = await fetchLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        setError("Failed to fetch leaderboard. Please try again.");
      }
    }
    getLeaderboard();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.username}: {entry.score}
          </li>
        ))}
      </ul>
      <button onClick={() => router.push("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}
