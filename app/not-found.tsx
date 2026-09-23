import Link from "next/link";
import { Logo } from "@/components/logo";
import { FadeIn } from "@/components/motion";
import { button, sectionLabel } from "@/lib/styles";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-start justify-center bg-night p-[clamp(20px,4.2vw,72px)] max-[620px]:p-5">
      <Logo />
      <FadeIn>
        <p className={`${sectionLabel} mt-[90px]`}>404</p>
        <h1 className="max-w-[900px] text-[clamp(3rem,8vw,8rem)]">This route hasn't been built yet.</h1>
        <p className="text-[#aaa5b5]">The page may have moved, or the link may be incomplete.</p>
        <Link className={button} href="/">Return home</Link>
      </FadeIn>
    </main>
  );
}
