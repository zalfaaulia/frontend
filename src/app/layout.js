import Link from "next/link";
import "./styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/quiz_list">Quizzes</Link>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
