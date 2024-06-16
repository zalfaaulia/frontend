"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchQuizDetails } from "../../../lib/api";

export default function QuizDetails() {
  const router = useRouter();
  const { quiz_id } = router.query;
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (quiz_id) {
      const fetchData = async () => {
        const data = await fetchQuizDetails(quiz_id);
        setQuiz(data);
      };
      fetchData();
    }
  }, [quiz_id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            <p>{question.text}</p>
            <ul>
              {question.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
