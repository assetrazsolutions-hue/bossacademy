/**
 * BOSS wordmark: BOS + orange S, geometric sans, base accent bar.
 * Building Outstanding Smart Skills — Global Academy of Technology
 */
type BrandLogoProps = {
  /** `light`: blue/orange on white. `dark`: light wordmark for dark backgrounds (e.g. footer). */
  variant?: 'light' | 'dark'
  /** `lg` nav, `md` compact, `sm` footer */
  size?: 'sm' | 'md' | 'lg'
  /** Nav link hover (parent should use `group`) */
  interactive?: boolean
  className?: string
}

const sizeClasses = {
  lg: {
    word: 'text-[1.875rem] sm:text-[2.125rem] md:text-[2.5rem] leading-[0.92]',
    sub: 'text-[0.6875rem] sm:text-xs md:text-sm mt-2',
    bar: 'mt-2.5 h-[3px]',
  },
  md: {
    word: 'text-2xl sm:text-3xl leading-[0.92]',
    sub: 'text-[0.65rem] sm:text-xs mt-1.5',
    bar: 'mt-2 h-[3px]',
  },
  sm: {
    word: 'text-xl leading-[0.92]',
    sub: 'text-[0.65rem] mt-1.5',
    bar: 'mt-2 h-[2.5px]',
  },
} as const

export default function BrandLogo({
  variant = 'light',
  size = 'lg',
  interactive = false,
  className = '',
}: BrandLogoProps) {
  const s = sizeClasses[size]
  const isLight = variant === 'light'

  const bosClass = isLight ? 'text-primary-600' : 'text-white'
  const lastSClass = isLight ? 'text-accent-500' : 'text-accent-500'
  const barLeft = isLight ? 'bg-primary-600' : 'bg-white/85'
  const barRight = 'bg-accent-500'
  /** Light: spec #475569 (slate-600). Dark footer: readable gray on slate-900. */
  const subClass = isLight ? 'text-[#475569] font-medium' : 'text-slate-400 font-medium'

  return (
    <div className={`inline-flex flex-col w-fit ${className}`}>
      <div className={`inline-flex items-baseline font-heading font-extrabold uppercase tracking-[-0.07em] ${s.word}`}>
        <span className={`${bosClass} ${interactive ? 'group-hover:text-primary-700 transition-colors duration-200' : ''}`}>
          BOS
        </span>
        <span className={`${lastSClass} tracking-[-0.06em] ${interactive ? 'group-hover:text-accent-600 transition-colors duration-200' : ''}`}>
          S
        </span>
      </div>
      {/* Minimal base bar: blue span + orange accent segment (no gradient) */}
      <div className={`flex w-full gap-0.5 rounded-sm overflow-hidden ${s.bar}`} aria-hidden>
        <span className={`flex-[2.1] min-w-0 rounded-sm ${barLeft}`} />
        <span className={`flex-[0.65] min-w-0 rounded-sm ${barRight}`} />
      </div>
      <p className={`${s.sub} ${subClass} tracking-wide leading-snug max-w-[17rem]`}>
        Global Academy of Technology
      </p>
    </div>
  )
}
