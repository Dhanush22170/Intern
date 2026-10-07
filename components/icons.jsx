const base = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const icons = {
  design: (
    <svg {...base}>
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8L12 3z" />
    </svg>
  ),
  code: (
    <svg {...base}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  brand: (
    <svg {...base}>
      <circle cx="9" cy="10" r="6" />
      <rect x="11" y="11" width="9" height="9" rx="2" />
    </svg>
  ),
  marketing: (
    <svg {...base}>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </svg>
  ),
};

export default function Icon({ name }) {
  return icons[name] ?? null;
}
