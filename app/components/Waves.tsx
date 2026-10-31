/** The two-layer wave under the closing call to action (blue and green tints of the brand colours). */
export function Waves() {
  return (
    <svg
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className="mt-12 block h-20 w-full sm:h-28 lg:h-36"
      aria-hidden="true"
    >
      <path
        d="M0 70 C 240 130 480 130 720 70 S 1200 10 1440 70 V140 H0 Z"
        fill="color-mix(in oklab, var(--brand-blue) 14%, transparent)"
      />
      <path
        d="M0 95 C 300 40 560 40 820 95 S 1230 130 1440 90 V140 H0 Z"
        fill="color-mix(in oklab, var(--brand-green) 14%, transparent)"
      />
    </svg>
  );
}
