"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchQuizzes } from "../../../lib/api";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuizzes();
      setQuizzes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Quiz List</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            <Link href={`/quiz_details/${quiz._id}`}>
              <a>{quiz.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
