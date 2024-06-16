"use client";
import React, { useEffect, useState } from "react";
import { fetchParticipationHistory } from "../../../lib/api";

export default function Dashboard() {
  const [participations, setParticipations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const data = await fetchParticipationHistory(token);
      setParticipations(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Participation History</h2>
      <ul>
        {participations.map((participation) => (
          <li key={participation._id}>
            <p>Quiz: {participation.quiz_id}</p>
            <p>Score: {participation.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
