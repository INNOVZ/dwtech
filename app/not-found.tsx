import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="not-found">
      <Logo />
      <p className="section-label">404</p>
      <h1>This route hasn’t been built yet.</h1>
      <p>The page may have moved, or the link may be incomplete.</p>
      <Link className="button" href="/">Return home</Link>
    </main>
  );
}
