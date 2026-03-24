import type { ReactNode } from 'react'

type PageHeroProps = {
  /** Small uppercase line above the title (optional) */
  eyebrow?: string
  title: string
  subtitle: string
  /** e.g. back link row below subtitle */
  children?: ReactNode
}

/**
 * Shared hero block: matches home-adjacent pages (primary blue, orange glow, Poppins title, Inter body).
 */
export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-primary-600 text-white py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(249,115,22,0.18),transparent)]" />
      <div className="section-container relative text-center max-w-3xl mx-auto">
        {eyebrow ? (
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">{eyebrow}</p>
        ) : null}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{title}</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  )
}
