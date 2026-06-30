// Lucide-style stroke icons. Color via `currentColor`.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Headset = (p) => (
  <svg {...base} {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2" /><rect x="2" y="13" width="4" height="7" rx="1.5" /><rect x="18" y="13" width="4" height="7" rx="1.5" /><path d="M21 19a4 4 0 0 1-4 3h-3" /></svg>
);
export const Signal = (p) => (
  <svg {...base} {...p}><path d="M3 17v.01M7 14a5 5 0 0 1 5-5M3 10a11 11 0 0 1 11-1" /><path d="M7 20v-3M12 20v-6M17 20V8M21.5 4.5 16 10" /><circle cx="12" cy="17" r="1.4" /></svg>
);
export const Film = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" /></svg>
);
export const Bolt = (p) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
export const Users = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.2a3.2 3.2 0 0 1 0 6M21 20a6 6 0 0 0-5-5.9" /></svg>
);
export const Lock = (p) => (
  <svg {...base} {...p}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15.5" r="1.3" /></svg>
);
export const Infinity = (p) => (
  <svg {...base} {...p}><path d="M6.5 8.5a3.5 3.5 0 1 0 0 7c2 0 3-1.5 5.5-3.5S16.5 8.5 18.5 8.5a3.5 3.5 0 1 1 0 7c-2 0-3-1.5-5.5-3.5" /></svg>
);
export const Calendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /><circle cx="8.5" cy="14" r="1" /><circle cx="12" cy="14" r="1" /><circle cx="15.5" cy="14" r="1" /></svg>
);
export const Rewind = (p) => (
  <svg {...base} {...p}><path d="M11 19 3 12l8-7v14ZM21 19l-8-7 8-7v14Z" /></svg>
);
export const Globe = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
);
export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9.5 12 1.8 1.8L15 10" /></svg>
);
export const Wifi = (p) => (
  <svg {...base} {...p}><path d="M2 8.8a16 16 0 0 1 20 0M5 12.3a11 11 0 0 1 14 0M8.5 15.8a6 6 0 0 1 7 0" /><circle cx="12" cy="19" r="1.2" /></svg>
);
export const Sparkles = (p) => (
  <svg {...base} {...p}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></svg>
);
export const Cloud = (p) => (
  <svg {...base} {...p}><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7Z" /></svg>
);
export const Refresh = (p) => (
  <svg {...base} {...p}><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 4v4h-4" /></svg>
);
export const Hd = (p) => (
  <svg {...base} {...p}><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M7 9v6M11 9v6M7 12h4M14 9v6h1.6a2.4 2.4 0 0 0 0-6H14Z" /></svg>
);
export const Tv = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
);
export const Phone = (p) => (
  <svg {...base} {...p}><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10 5.5h4" /><circle cx="12" cy="18.5" r="0.8" /></svg>
);
export const Monitor = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
);
export const Box = (p) => (
  <svg {...base} {...p}><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" /><path d="M4 7l8 4 8-4M12 11v10" /></svg>
);
export const Flame = (p) => (
  <svg {...base} {...p}><path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1-3 .5 1 1.5 1.5 2 1.5C11 7 10 5 12 3Z" /></svg>
);
// Real Apple logo silhouette (monochrome — inherits currentColor)
export const Apple = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M18.71 13.06c-.03-2.93 2.39-4.34 2.5-4.41-1.36-1.99-3.48-2.26-4.24-2.29-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.32-1.04-3.82-1.01-1.96.03-3.78 1.14-4.79 2.9-2.05 3.55-.52 8.8 1.47 11.68.97 1.41 2.13 2.99 3.65 2.93 1.46-.06 2.02-.95 3.79-.95 1.77 0 2.27.95 3.82.92 1.58-.03 2.58-1.43 3.54-2.85.69-1.02.98-1.6 1.53-2.74-4.03-1.54-4.66-7.29-.24-9.22M16.97 4.18c.81-.98 1.36-2.34 1.21-3.69-1.17.05-2.59.78-3.43 1.76-.75.87-1.41 2.25-1.23 3.58 1.3.1 2.64-.66 3.45-1.65" />
  </svg>
);
// Real Google Play logo (4-colour triangle)
export const GooglePlay = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} {...p}>
    <path fill="#00D3FF" d="M4 2.6 13 12l-9 9.4c-.35-.2-.6-.6-.6-1.1V3.7c0-.5.25-.9.6-1.1Z" />
    <path fill="#00E676" d="M4 2.6c.2-.12.46-.11.72.04L16.8 9.5 13 12 4 2.6Z" />
    <path fill="#FF3D44" d="M4 21.4 13 12l3.8 2.5L4.72 21.36c-.26.15-.52.16-.72.04Z" />
    <path fill="#FFCE00" d="m16.8 9.5 3.6 2.05c1 .57 1 1.63 0 2.2L16.8 14.5 13 12l3.8-2.5Z" />
  </svg>
);
// Amazon smile (Fire TV is Amazon) — brand orange
export const Amazon = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} {...p}>
    <path fill="#FF9900" d="M3 13.3c2.6 1.9 5.8 2.9 8.9 2.9 2.2 0 4.6-.5 6.8-1.6.4-.2.8.3.4.6-2 1.8-5 2.7-7.6 2.7-3.6 0-6.9-1.4-9.3-3.7-.2-.2 0-.4.4-.2Z" />
    <path fill="#FF9900" d="M20.4 11.9c-.3-.4-2-.3-2.7-.1-.2 0-.3-.2-.1-.3.6-.4 1.6-.5 2.4-.4.8.1.9.6.6 1.7-.2.7-.6 1.3-1 1.7-.1.1-.3 0-.2-.2.2-.5.6-1.6.3-2.1Z" />
    <path fill="#232F3E" d="M13.2 6.6c-1 .07-2.05.15-3 .56-1.1.48-1.86 1.45-1.86 2.88 0 1.83 1.16 2.74 2.64 2.74 1.25 0 1.94-.3 2.9-1.28.32.46.42.69 1 1.17.13.07.3.06.41-.04.36-.31.99-.86 1.35-1.16.15-.12.12-.31.01-.47-.32-.44-.66-.8-.66-1.62V6.66c0-1.16.08-2.22-.77-3.02-.67-.64-1.78-.87-2.64-.87-1.67 0-3.53.62-3.92 2.68-.04.22.12.33.26.36l1.7.19c.16-.01.27-.17.3-.33.15-.71.74-1.05 1.4-1.05.36 0 .77.13.98.45.24.36.21.85.21 1.27v.14Zm-.33 3.62c-.24.43-.63.69-1.06.69-.59 0-.93-.45-.93-1.11 0-1.31 1.17-1.55 2.28-1.55v.33c0 .6.01 1.1-.29 1.64Z" />
  </svg>
);
export const Play = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
);
export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 12.5 4.5 4.5L19 7" /></svg>
);
export const Star = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" /></svg>
);
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Facebook = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M14 9V7c0-.9.6-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v2H8v3h2v8h3v-8h2.4l.6-3H13Z" /></svg>
);
export const Instagram = (p) => (
  <svg {...base} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" /></svg>
);
export const Youtube = (p) => (
  <svg {...base} {...p}><rect x="2.5" y="6" width="19" height="12" rx="4" /><path d="M10.5 9.2 15 12l-4.5 2.8V9.2Z" fill="currentColor" stroke="none" /></svg>
);
export const XLogo = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.4l-4.2-5.5L7 21H4l7-8L3 3h5.5l3.8 5L17.5 3Zm-1.9 16h1.5L8.5 4.8H6.9L15.6 19Z" /></svg>
);
// Category icons (marquee)
export const Trophy = (p) => (
  <svg {...base} {...p}><path d="M7 4h10v4.5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4.6a2.4 2.4 0 0 0 2.9 2.4M17 6h2.4a2.4 2.4 0 0 1-2.9 2.4" /><path d="M12 13.5V17M8.5 20h7M10 20v-3h4v3" /></svg>
);
export const Newspaper = (p) => (
  <svg {...base} {...p}><path d="M4 5h13v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z" /><path d="M17 8h3v9.5a2.5 2.5 0 0 1-3 2.4" /><path d="M7 8.5h6.5M7 12h6.5M7 15.5h4" /></svg>
);
export const MusicNote = (p) => (
  <svg {...base} {...p}><path d="M9 17.5V6l10-2v9.5" /><circle cx="6" cy="17.5" r="2.8" /><circle cx="16" cy="15.5" r="2.8" /></svg>
);
// Real Android robot
export const Android = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M6 9.4h12v6.9c0 .6-.5 1.1-1.1 1.1H7.1c-.6 0-1.1-.5-1.1-1.1V9.4Z" />
    <rect x="3" y="9.6" width="2.3" height="6.4" rx="1.15" />
    <rect x="18.7" y="9.6" width="2.3" height="6.4" rx="1.15" />
    <rect x="8.4" y="16.6" width="2.1" height="4.6" rx="1.05" />
    <rect x="13.5" y="16.6" width="2.1" height="4.6" rx="1.05" />
    <path d="M6 8.7C6.2 6 8.8 4.1 12 4.1S17.8 6 18 8.7H6Zm2.8-2.1a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm6.4 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" />
    <path d="M8.2 3.2 9.4 5M15.8 3.2 14.6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
  </svg>
);
