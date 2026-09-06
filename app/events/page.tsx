import type { Metadata } from 'next'
import { Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upcoming Events | JROTC Cadet Portal',
  description:
    'Upcoming JROTC events — drill meets, PT sessions, ceremonies, inspections, and community service.',
}

type EventItem = {
  month: string
  day: string
  title: string
  time: string
  location: string
  category: 'Drill' | 'PT' | 'Ceremony' | 'Service' | 'Inspection'
  body: string
}

const events: EventItem[] = [
  {
    month: 'MAR',
    day: '14',
    title: 'Battalion Drill Meet',
    time: '0800 – 1400',
    location: 'Main Gymnasium',
    category: 'Drill',
    body: 'Squads compete in armed and unarmed regulation and exhibition drill. Class A uniform required.',
  },
  {
    month: 'MAR',
    day: '19',
    title: 'Morning PT Session',
    time: '0630 – 0730',
    location: 'Athletic Field',
    category: 'PT',
    body: 'Cadet Challenge fitness assessment prep. Full PT uniform and water bottle required.',
  },
  {
    month: 'MAR',
    day: '22',
    title: 'Uniform Inspection',
    time: '1500 – 1630',
    location: 'Room 204',
    category: 'Inspection',
    body: 'In-ranks inspection of Class A uniforms. Review the Uniform Guides beforehand.',
  },
  {
    month: 'APR',
    day: '05',
    title: 'Community Service Day',
    time: '0900 – 1300',
    location: 'City Park',
    category: 'Service',
    body: 'Corps-wide park cleanup and trail restoration. Community service hours logged.',
  },
  {
    month: 'APR',
    day: '18',
    title: 'Awards & Recognition Ceremony',
    time: '1800 – 2000',
    location: 'Auditorium',
    category: 'Ceremony',
    body: 'End-of-semester awards, promotions, and recognition. Families invited to attend.',
  },
  {
    month: 'MAY',
    day: '03',
    title: 'Spring Pass in Review',
    time: '1000 – 1200',
    location: 'Parade Field',
    category: 'Ceremony',
    body: 'Formal military review honoring cadet leadership. Full Corps formation required.',
  },
]

const categoryStyles: Record<EventItem['category'], string> = {
  Drill: 'bg-primary/10 text-primary',
  PT: 'bg-accent/20 text-accent-foreground',
  Ceremony: 'bg-primary/10 text-primary',
  Service: 'bg-accent/20 text-accent-foreground',
  Inspection: 'bg-primary/10 text-primary',
}

export default function EventsPage() {
  return (
    <main>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <span className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Training Calendar
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed text-pretty">
            Stay ahead of every formation. Mark your calendar, show up early, and be squared away.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="group flex gap-5 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-display text-xs tracking-widest">{event.month}</span>
                <span className="font-display text-2xl font-bold leading-none">{event.day}</span>
              </div>
              <div className="min-w-0">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase ${categoryStyles[event.category]}`}
                >
                  {event.category}
                </span>
                <h2 className="mt-2 font-display text-lg font-semibold tracking-wide uppercase">
                  {event.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{event.body}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-primary" aria-hidden="true" />
                    {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-primary" aria-hidden="true" />
                    {event.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
