"use client"; // Pastikan ini adalah baris pertama

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Menggunakan next/navigation
import { fetchQuizDetails, participateInQuiz } from "../../../lib/api"; // Import fetchQuizDetails

export default function Participate() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);
  const router = useRouter();
  const quizId = "12345"; // Pastikan Anda mengganti ini dengan ID kuis yang sebenarnya

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const data = await fetchQuizDetails(quizId); // Mengambil detail kuis berdasarkan quizId
        setQuiz(data);
      } catch (error) {
        setError("Failed to fetch quiz details. Please try again.");
      }
    }
    fetchQuiz();
  }, [quizId]); // Menambahkan quizId sebagai dependensi

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await participateInQuiz(token, quizId, answers); // Menggunakan quizId yang telah diambil sebelumnya
      if (response.success) {
        router.push("/result");
      } else {
        setError("Failed to submit answers. Please try again.");
      }
    } catch (error) {
      setError("Failed to submit answers. Please try again.");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Participate in Quiz</h1>
      {quiz ? (
        <form onSubmit={handleSubmit}>
          {quiz.questions.map((question) => (
            <div key={question.id}>
              <label>{question.text}</label>
              <input
                type="text"
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
