export function LogoInline({ width = 120, height = 120, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4F8CFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3D7AED', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="95" fill="url(#logoGrad)" />

      <rect x="85" y="45" width="30" height="110" rx="8" fill="white" />
      <rect x="45" y="85" width="110" height="30" rx="8" fill="white" />

      <path
        d="M100 95c-3.5-4-10-4-10 2 0 6 10 15 10 15s10-9 10-15c0-6-6.5-6-10-2z"
        fill="#22C55E"
      />
    </svg>
  );
}
