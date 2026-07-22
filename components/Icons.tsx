/**
 * Inline SVG icon set — carried over from the original site and extended in
 * the same visual language: 24x24 viewBox, 1.6 stroke, round joins, no fills
 * except deliberate dots. Inline (not an icon font or sprite) so they cost
 * zero extra requests and inherit currentColor.
 */

type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
  focusable: false,
} as const;

export const Target = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);

export const Bolt = (p: P) => (
  <svg {...base} {...p}>
    <path
      d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path
      d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const Star = (p: P) => (
  <svg {...base} {...p}>
    <path
      d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const Rocket = (p: P) => (
  <svg {...base} {...p}>
    <path
      d="M12 3c3 1 5 4 5 8l-2.4 2.4H9.4L7 11c0-4 2-7 5-8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="1.4" fill="currentColor" />
    <path
      d="M9.4 15c-1.4.5-2.4 2-2.4 4.4 2.4 0 3.9-1 4.4-2.4M14.6 15c1.4.5 2.4 2 2.4 4.4-2.4 0-3.9-1-4.4-2.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const Search = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path
      d="M12 3l7 3v5.5c0 4.2-2.9 7.7-7 9.5-4.1-1.8-7-5.3-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Layout = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="4" width="17" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 9h17M9 9v11" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const Chart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path
      d="m7.5 15 3.5-4 3 2.5L20 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 7.5V12l3 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Users = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9.5" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.8 19c.4-3.1 2.9-5 5.7-5s5.3 1.9 5.7 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M16 6.2a3 3 0 0 1 0 5.6M17.5 14.4c1.7.7 2.9 2.3 3.2 4.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
