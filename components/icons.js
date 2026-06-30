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
export const Apple = (p) => (
  <svg {...base} {...p}><path d="M16 13.5c0 3-2 5.5-3.5 5.5-1 0-1.5-.7-2.5-.7s-1.6.7-2.6.7C5.4 19 3.5 16 3.5 13c0-3 2-4.5 3.7-4.5 1 0 1.9.7 2.6.7.6 0 1.6-.8 2.8-.7 1.4.1 2.4.8 3 1.8-1.6 1-1.6 3.2.9 3.9Z" /><path d="M12.5 6c.3-1.2 1.4-2.3 2.6-2.4.2 1.3-.4 2.4-1 3-.6.5-1.4 1-2.2.9" /></svg>
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
