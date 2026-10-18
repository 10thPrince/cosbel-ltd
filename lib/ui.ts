// Shared Tailwind class strings for repeated patterns.
const b = "inline-block cursor-pointer rounded-full border-2 px-6 py-3 font-semibold no-underline transition duration-200 hover:-translate-y-0.5";
export const ui = {
  wrap: "mx-auto w-full max-w-6xl px-5",
  sec: "py-20",
  secAlt: "bg-mist py-20",
  h2: "mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl",
  grid: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  card: "overflow-hidden rounded-2xl border border-line bg-bg shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl",
  cardLink: "font-semibold text-brand2 hover:underline",
  plain: "rounded-2xl border border-line bg-bg p-6 shadow-sm",
  pageHero: "page-hero relative py-16 text-white md:py-24",
  pageP: "max-w-xl text-lg text-white/90",
  btn: `${b} border-brand2 bg-brand2 text-white hover:border-brand hover:bg-brand hover:shadow-lg`,
  btnAccent: `${b} border-accent bg-accent text-[#1a1004] hover:shadow-lg hover:brightness-95`,
  btnLight: `${b} border-white bg-white text-brand hover:shadow-lg`,
  btnGhost: `${b} border-white/70 text-white hover:bg-white/10`,
};
