/**
 * BOSS wordmark: one cohesive word (BOS + orange S), geometric sans, base accent bar.
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
    word: 'text-[1.875rem] sm:text-[2.125rem] md:text-[2.5rem] leading-none',
    sub: 'text-[0.6875rem] sm:text-[0.8125rem] md:text-[0.875rem]',
    bar: 'mt-[0.4rem] sm:mt-[0.45rem] md:mt-[0.5rem] h-[3px]',
    subGap: 'mt-[0.35rem] sm:mt-2',
  },
  md: {
    word: 'text-2xl sm:text-3xl leading-none',
    sub: 'text-[0.65rem] sm:text-xs',
    bar: 'mt-2 h-[3px]',
    subGap: 'mt-1.5',
  },
  sm: {
    word: 'text-xl leading-none',
    sub: 'text-[0.65rem]',
    bar: 'mt-[0.35rem] h-[2.5px]',
    subGap: 'mt-1.5',
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
  const barLeft = isLight ? 'bg-primary-600' : 'bg-white/90'
  const barRight = 'bg-accent-500'
  /** Tighter subtitle, step up from medium → semibold */
  const subClass = isLight ? 'text-[#475569] font-semibold' : 'text-slate-400 font-semibold'

  const hoverBos = interactive ? 'group-hover:text-primary-700 transition-colors duration-200' : ''
  const hoverS = interactive ? 'group-hover:text-accent-600 transition-colors duration-200' : ''

  return (
    <div className={`inline-flex flex-col w-fit ${className}`}>
      {/* Single optical line: shared tracking + weight so BOSS reads as one word; orange S tucked with negative margin */}
      <div
        className={`inline-flex items-baseline font-heading font-extrabold uppercase ${s.word} tracking-[-0.065em]`}
      >
        <span className={`${bosClass} ${hoverBos}`}>BOS</span>
        <span className={`${lastSClass} ${hoverS} -ml-[0.03em]`}>S</span>
      </div>
      {/* Flush two-tone bar — no gap, shared edge for a clean underline */}
      <div className={`flex w-full gap-0 overflow-hidden rounded-sm ${s.bar}`} aria-hidden>
        <span className={`min-h-0 flex-[2.05] rounded-l-sm ${barLeft}`} />
        <span className={`min-h-0 flex-[0.7] rounded-r-sm ${barRight}`} />
      </div>
      <p
        className={`${s.sub} ${s.subGap} ${subClass} tracking-[-0.02em] leading-tight max-w-[16.5rem]`}
      >
        Global Academy of Technology
      </p>
    </div>
  )
}
