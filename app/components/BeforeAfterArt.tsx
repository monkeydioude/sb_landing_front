/**
 * Hero illustration: the same marketing budget before and after Spendbaker. Left, a mess of spreadsheets,
 * errors, sticky notes and unread mail. Right, one clean dashboard in the brand colours. Pure SVG: sharp at
 * any size, a few KB, no image request. It carries no text a translator would need to touch and is purely
 * decorative (aria-hidden); the "Without / With Spendbaker" chips are real HTML on top of it.
 * Keep the bottom ~48px of the 288px viewBox free (the floating runway card overlaps it), and the content
 * inside x 48-552 (the art is cropped to the box with `slice`; the scale below leaves room for that).
 */
export function BeforeAfterArt({ className }: { className?: string }) {
  const cell = (x: number, y: number, w: number, fill: string) => (
    <rect key={`${x}-${y}`} x={x} y={y} width={w} height="12" rx="2" fill={fill} />
  );
  const bars = [34, 52, 44, 66, 58, 84, 76];
  return (
    <svg
      viewBox="0 0 600 288"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ba-before" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b6a82" />
          <stop offset="1" stopColor="#1e2a3d" />
        </linearGradient>
        <linearGradient id="ba-after" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe0ff" />
          <stop offset="1" stopColor="#c9f1de" />
        </linearGradient>
        <linearGradient id="ba-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4285f4" />
          <stop offset="1" stopColor="#33c483" />
        </linearGradient>
        <filter id="ba-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#0b1220" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* ---------- BEFORE ---------- */}
      <rect x="-120" width="420" height="288" fill="url(#ba-before)" />
      {/* Content is scaled in around the centre so it survives the "slice" crop on narrow screens. */}
      <g transform="translate(300 144) scale(0.84) translate(-300 -144)">
        <g filter="url(#ba-shadow)">
          {/* back spreadsheet */}
          <g transform="rotate(6 220 120)">
            <rect x="140" y="56" width="140" height="104" rx="8" fill="#e6ebf3" />
            <rect x="140" y="56" width="140" height="16" rx="8" fill="#b7c2d3" />
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2].map((c) => cell(150 + c * 42, 80 + r * 19, 36, '#c9d3e1')),
            )}
          </g>
          {/* front spreadsheet */}
          <g transform="rotate(-5 105 130)">
            <rect x="26" y="74" width="170" height="124" rx="8" fill="#f8fafc" />
            <rect x="26" y="74" width="170" height="18" rx="8" fill="#cbd5e1" />
            <circle cx="40" cy="83" r="3" fill="#ef4444" />
            <circle cx="51" cy="83" r="3" fill="#f59e0b" />
            <circle cx="62" cy="83" r="3" fill="#22c55e" />
            {[0, 1, 2, 3, 4].map((r) =>
              [0, 1, 2].map((c) =>
                cell(
                  36 + c * 50,
                  100 + r * 19,
                  44,
                  r === 1 && c === 1 ? '#fca5a5' : r === 3 && c === 2 ? '#fde68a' : '#e2e8f0',
                ),
              ),
            )}
            <text x="88" y="130" fontSize="9" fontWeight="700" fill="#991b1b">
              #REF!
            </text>
            <text x="148" y="168" fontSize="9" fontWeight="700" fill="#92400e">
              ???
            </text>
          </g>
        </g>
        {/* sticky note */}
        <g transform="rotate(8 250 70)" filter="url(#ba-shadow)">
          <rect x="222" y="38" width="52" height="52" rx="3" fill="#fde047" />
          <text x="236" y="76" fontSize="30" fontWeight="700" fill="#a16207">
            ?
          </text>
        </g>
        {/* unread mail */}
        <g filter="url(#ba-shadow)">
          <rect x="206" y="176" width="64" height="44" rx="6" fill="#f1f5f9" />
          <path
            d="M208 180l30 22 30-22"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="270" cy="178" r="12" fill="#ef4444" />
          <text x="270" y="182.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
            37
          </text>
        </g>

        {/* ---------- AFTER ---------- */}
        <rect x="300" width="420" height="288" fill="url(#ba-after)" />
        <g filter="url(#ba-shadow)">
          <rect x="334" y="46" width="232" height="168" rx="12" fill="#fff" />
          <rect x="334" y="46" width="232" height="5" rx="2.5" fill="url(#ba-brand)" />
          {/* stat tiles */}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={346 + i * 74} y="62" width="66" height="38" rx="7" fill="#f1f5fb" />
              <rect x={354 + i * 74} y="70" width="26" height="5" rx="2.5" fill="#b4c2d9" />
              <rect
                x={354 + i * 74}
                y="82"
                width="40"
                height="9"
                rx="3"
                fill={i === 1 ? 'url(#ba-brand)' : '#334155'}
              />
            </g>
          ))}
          {/* bars */}
          <line x1="346" y1="190" x2="554" y2="190" stroke="#e2e8f0" strokeWidth="1.5" />
          {bars.map((h, i) => (
            <g key={i}>
              <rect
                x={352 + i * 29}
                y={190 - h * 0.95}
                width="11"
                height={h * 0.95}
                rx="2.5"
                fill="#4285f4"
                opacity={i > 4 ? 0.45 : 1}
              />
              <rect
                x={365 + i * 29}
                y={190 - h * 0.8 - 8}
                width="11"
                height={h * 0.8 + 8}
                rx="2.5"
                fill="#33c483"
                opacity={i > 4 ? 0.45 : 1}
              />
            </g>
          ))}
          <path
            d="M356 160 L385 140 L414 150 L443 118 L472 128 L501 100 L538 88"
            fill="none"
            stroke="#0f172a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
        </g>
        {/* checkmark badge */}
        <g filter="url(#ba-shadow)">
          <circle cx="552" cy="50" r="19" fill="url(#ba-brand)" />
          <path
            d="M543 50.5l7 7 12-14"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* ---------- DIVIDER ---------- */}
      <rect x="298.5" width="3" height="288" fill="#fff" opacity="0.85" />
      <g filter="url(#ba-shadow)">
        <circle cx="300" cy="144" r="17" fill="#fff" />
        <path
          d="M292 144h14m-6-6l6 6-6 6"
          fill="none"
          stroke="url(#ba-brand)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
