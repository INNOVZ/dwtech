
export function Logo({ light = true }: { light?: boolean }) {
  return (
    <a
      href="/"
      className={`relative z-[2] inline-flex flex-col leading-none ${light ? "text-white" : "text-midnight"}`}
      aria-label="DW Tech home"
    >
      <span className="text-[1.72rem] font-medium tracking-[-.07em] max-[620px]:text-[1.46rem]">
        dw&lt;<strong className="font-medium text-orchid">tech</strong>&gt;
      </span>
      <span className="mt-[7px] text-[.42rem] tracking-[.31em] uppercase max-[620px]:text-[.36rem]">
        A DesertWhales initiative
      </span>
    </a>
  );
}
