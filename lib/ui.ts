// Shared Tailwind class strings for repeated patterns.
const b = "inline-flex items-center justify-center gap-2 cursor-pointer rounded-full border-2 px-6 py-3 font-semibold no-underline transition duration-200 hover:-translate-y-0.5";
export const ui = {
  wrap: "mx-auto w-full max-w-6xl px-5",
  sec: "py-20",
  secAlt: "bg-mist py-20",
  eyebrow: "mb-3 text-sm font-bold uppercase tracking-widest text-brand2",
  h2: "mb-4 text-3xl font-extrabold tracking-tight text-brand sm:text-4xl",
  lead: "max-w-2xl text-lg text-fg/70",
  grid: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  card: "group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
  cardLink: "font-semibold text-brand2 hover:underline",
  plain: "rounded-2xl border border-line bg-white p-6 shadow-sm",
  pageHero: "border-b border-line bg-mist py-14",
  pageP: "max-w-2xl text-lg text-fg/70",
  pageH1: "mb-3 text-4xl font-extrabold tracking-tight text-brand sm:text-5xl",
  btn: `${b} border-brand2 bg-brand2 text-white hover:border-brand hover:bg-brand hover:shadow-lg`,
  btnAccent: `${b} border-accent bg-accent text-[#1a1004] hover:shadow-lg hover:brightness-95`,
  btnOutline: `${b} border-brand2 bg-white text-brand2 hover:bg-brand2/10`,
  btnLight: `${b} border-white bg-white text-brand hover:shadow-lg`,
  btnGhost: `${b} border-white/70 text-white hover:bg-white/10`,
};
