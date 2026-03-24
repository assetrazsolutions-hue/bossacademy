/** Abstract career-growth illustration — brand colors, no external asset */
export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto" aria-hidden>
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <rect x="40" y="48" width="400" height="304" rx="20" className="fill-white stroke-slate-200" strokeWidth="1.5" />
        <rect x="64" y="80" width="168" height="120" rx="12" className="fill-surface" stroke="#e2e8f0" strokeWidth="1" />
        <path
          d="M80 168 L108 142 L138 158 L168 118 L196 140"
          className="stroke-primary-600"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="80" cy="168" r="5" className="fill-accent-500" />
        <circle cx="196" cy="140" r="5" className="fill-primary-600" />
        <rect x="252" y="80" width="164" height="88" rx="12" className="fill-primary-600/10" stroke="#bfdbfe" strokeWidth="1" />
        <rect x="252" y="188" width="164" height="100" rx="12" className="fill-slate-50" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="268" y="206" width="72" height="8" rx="4" className="fill-slate-200" />
        <rect x="268" y="226" width="120" height="8" rx="4" className="fill-slate-200" />
        <rect x="268" y="246" width="96" height="8" rx="4" className="fill-slate-200" />
        <rect x="268" y="104" width="48" height="48" rx="10" className="fill-accent-500/90" />
        <path d="M286 120 L292 128 L302 116" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="400" cy="112" r="28" className="fill-primary-600" opacity="0.9" />
        <path
          d="M392 112 L398 118 L412 104"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="72" y="224" width="144" height="40" rx="10" className="fill-primary-600/15" />
        <rect x="72" y="276" width="112" height="12" rx="6" className="fill-slate-200" />
        <rect x="72" y="296" width="80" height="12" rx="6" className="fill-slate-200" />
        <circle cx="420" cy="320" r="8" className="fill-accent-400/80" />
        <circle cx="52" cy="96" r="6" className="fill-primary-400/60" />
      </svg>
    </div>
  )
}
