
export function Logo({
  light = true,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href="/"
      className={`relative z-[2] inline-flex items-center ${className}`}
      aria-label="Desert Whales Technologies home"
    >
      <img
        src="/desertwhales_tech.svg"
        alt="Desert Whales Technologies - Digital Business Transformation"
        width="177"
        height="40"
        className={`h-9 sm:h-10 w-auto object-contain transition-opacity duration-200 hover:opacity-90 ${
          light ? "brightness-0 invert" : ""
        }`}
        loading="eager"
      />
    </a>
  );
}
