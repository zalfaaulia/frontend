// src/lib/api.js

export async function registerUser(username, password) {
  const response = await fetch("http://localhost:6000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

export async function loginUser(username, password) {
  const response = await fetch("http://localhost:6000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

export async function fetchQuizzes() {
  const response = await fetch("http://localhost:7000/quiz");
  return response.json();
}

export async function fetchQuizDetails(quizId) {
  const response = await fetch(`http://localhost:7000/quiz/${quizId}`);
  return response.json();
}

export async function participateInQuiz(token, quizId, answers) {
  const response = await fetch(`http://localhost:8000/participate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ user_id: token, quiz_id: quizId, answers }),
  });
  return response.json();
}

export async function fetchParticipationHistory(token) {
  const response = await fetch("http://localhost:8000/participations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function fetchLeaderboard(quizId) {
  const response = await fetch(`http://localhost:8000/leaderboard/${quizId}`);
  return response.json();
}
