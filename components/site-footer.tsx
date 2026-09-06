import Link from 'next/link'
import { Shield } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Shield className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold tracking-wide uppercase">
              Cadet Portal
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Leadership, citizenship, and service. The official resource hub for the Corps of Cadets.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.15em] uppercase">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/uniform-guides" className="transition-colors hover:text-primary">
                Uniform Guides
              </Link>
            </li>
            <li>
              <Link href="/events" className="transition-colors hover:text-primary">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/login" className="transition-colors hover:text-primary">
                Cadet Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.15em] uppercase">
            Cadet Creed
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {'"I am an Army Junior ROTC Cadet. I will always conduct myself to bring credit to my family, country, school, and the Corps of Cadets."'}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Corps of Cadets. For training and demonstration purposes.
        </p>
      </div>
    </footer>
  )
}
