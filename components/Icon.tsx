const paths: Record<string, string> = {
  factory: "M3 21V9l6 4V9l6 4V4h3v17zM7 17h2m4 0h2",
  home: "M3 11 12 3l9 8M5 10v11h14V10M10 21v-6h4v6",
  building: "M5 21V3h10v18M15 9h4v12M9 7h2M9 11h2M9 15h2M3 21h18",
  bolt: "M13 2 4 14h6l-1 8 9-12h-6z",
  check: "m5 13 4 4L19 7",
  shield: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
};
export default function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d={paths[name] || paths.bolt} /></svg>);
}
