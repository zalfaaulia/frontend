import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
      <div className="flex space-x-4">
        <Link
          href="/register"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Login
        </Link>
        <Link
          href="/quiz_list"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
        >
          View Quizzes
        </Link>
      </div>
    </div>
  );
}
