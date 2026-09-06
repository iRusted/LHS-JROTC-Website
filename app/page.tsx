import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CalendarDays, Medal, Shirt, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pillars = [
  {
    icon: Medal,
    title: 'Leadership',
    body: 'Develop the discipline and decision-making that define a cadet leader.',
  },
  {
    icon: Users,
    title: 'Citizenship',
    body: 'Serve your school and community with honor, integrity, and purpose.',
  },
  {
    icon: Target,
    title: 'Excellence',
    body: 'Hold the standard in academics, drill, and personal accountability.',
  },
]

const quickLinks = [
  {
    href: '/uniform-guides',
    icon: Shirt,
    title: 'Uniform Guides',
    body: 'Wear-out dates, inspection standards, ribbon placement, and grooming.',
  },
  {
    href: '/events',
    icon: CalendarDays,
    title: 'Upcoming Events',
    body: 'Drill meets, PT sessions, ceremonies, and community service dates.',
  },
]

const upcoming = [
  { date: 'MAR 14', title: 'Battalion Drill Meet', location: 'Main Gymnasium' },
  { date: 'MAR 22', title: 'Uniform Inspection', location: 'Room 204' },
  { date: 'APR 05', title: 'Community Service Day', location: 'City Park' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/images/cadet-formation.png"
          alt="JROTC cadet color guard standing at attention on a parade field at golden hour"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Corps of Cadets
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance uppercase sm:text-6xl">
            The Junior ROTC <span className="text-accent">Cadet Portal</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Your command center for uniform standards, upcoming events, and everything you need to
            hold the line. Motivated. Dedicated. Squared away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/login" />}
              className="bg-accent px-5 text-accent-foreground shadow-sm transition-transform hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0"
            >
              Cadet Login
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/events" />}
              className="border border-primary-foreground/30 bg-transparent px-5 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-wide uppercase">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl font-bold tracking-wide uppercase">Resources</h2>
          <p className="mt-1 text-sm text-muted-foreground">Jump straight to what you need.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {quickLinks.map(({ href, icon: Icon, title, body }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold tracking-wide uppercase">
                    {title}
                    <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase">On Deck</h2>
            <p className="mt-1 text-sm text-muted-foreground">The next formations and events.</p>
          </div>
          <Link
            href="/events"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex"
          >
            All events <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {upcoming.map((event) => (
            <li key={event.title} className="flex items-center gap-4 p-4 sm:p-5">
              <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-display text-xs tracking-widest">
                  {event.date.split(' ')[0]}
                </span>
                <span className="font-display text-lg font-bold leading-none">
                  {event.date.split(' ')[1]}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
