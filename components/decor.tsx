// Shapes echo the logo (rolling hills, the sun, small hearts) so the site stays on-brand without stock photos.

export function Hills({ className = "", fill = "#ffffff" }: { className?: string; fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-12 w-full sm:h-20 ${className}`}
      aria-hidden
    >
      <path
        d="M0 70C180 20 320 20 480 55s300 60 480 25 330-70 480-40v80H0z"
        fill="#42ae00"
        opacity="0.25"
      />
      <path d="M0 90c200-50 380-40 560-10s320 35 500 5 260-35 380-20v55H0z" fill={fill} />
    </svg>
  );
}

export function Sun({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, index) => index * 30);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g className="animate-sway origin-center" style={{ transformBox: "fill-box" }}>
        {rays.map((angle) => (
          <rect
            key={angle}
            x="94"
            y="4"
            width="12"
            height="38"
            rx="6"
            fill="#fcb400"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="46" fill="#fcc600" />
      <circle cx="100" cy="100" r="46" fill="url(#sun-glow)" />
      <defs>
        <radialGradient id="sun-glow" cx="0.35" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#fff3b0" />
          <stop offset="1" stopColor="#fcb400" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 21s-7.5-4.6-9.4-9.4C1.2 8 3.4 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.6 0 5.8 3.5 4.4 7.1C19.5 16.4 12 21 12 21z"
        fill="currentColor"
      />
    </svg>
  );
}

const confetti = [
  { x: 6, y: 18, color: "#0084d8", size: 10 },
  { x: 14, y: 72, color: "#fcb400", size: 14 },
  { x: 88, y: 14, color: "#6612ba", size: 9 },
  { x: 94, y: 62, color: "#42ae00", size: 12 },
  { x: 72, y: 88, color: "#fc4e0c", size: 8 },
  { x: 32, y: 8, color: "#fc4e0c", size: 7 },
];

export function Confetti({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {confetti.map((dot) => (
        <span
          key={`${dot.x}-${dot.y}`}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
        />
      ))}
    </div>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}
