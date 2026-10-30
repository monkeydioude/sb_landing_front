/** The icon gradient, defined once per page. Icons opt in with stroke: url(#gradient-primary) (see .gradient-icons in style.css). Same stops as sb_front, but in the icon's 24x24 user space: a gradient sized to each stroke's own box paints nothing on perfectly horizontal/vertical lines, which left some lucide icons half-drawn. */
export function GradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient
          id="gradient-primary"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
        >
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="100%" stopColor="#33c483" />
        </linearGradient>
      </defs>
    </svg>
  );
}
