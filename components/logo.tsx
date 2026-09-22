import Link from "next/link";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo ${light ? "logo--light" : "logo--dark"}`} aria-label="DW Tech home">
      <span className="logo__word">dw&lt;<strong>tech</strong>&gt;</span>
      <span className="logo__sub">A DesertWhales initiative</span>
    </Link>
  );
}
