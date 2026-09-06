import Image from 'next/image'
import type { Metadata } from 'next'
import { Check, Ribbon, Scissors, Shirt, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Uniform Guides | JROTC Cadet Portal',
  description:
    'Standards for the JROTC Class A, Class B, and PT uniforms — inspection checklists, ribbon placement, and grooming standards.',
}

const uniforms = [
  {
    tag: 'Class A',
    name: 'Service Dress',
    body: 'Worn for ceremonies, inspections, and formal events. The full measure of a squared-away cadet.',
    items: [
      'Beret worn 1 inch above eyebrows, flash over left eye',
      'Ribbons mounted 1/8 inch above left pocket seam',
      'Name plate centered on right pocket flap',
      'Trousers bloused, shoes polished to a shine',
    ],
  },
  {
    tag: 'Class B',
    name: 'Duty Uniform',
    body: 'Standard daily wear. Clean, pressed, and correct without the service coat.',
    items: [
      'Shirt tucked, gig line straight and aligned',
      'Rank insignia centered on collar',
      'No visible undershirt logos or colors',
      'Belt tip extends 2–4 inches past buckle',
    ],
  },
  {
    tag: 'PT',
    name: 'Physical Training',
    body: 'Worn for PT sessions and fitness assessments. Uniform and squared away, even in motion.',
    items: [
      'Corps t-shirt tucked into shorts',
      'Solid athletic shoes, no bright accents',
      'Crew socks pulled up evenly',
      'Reflective belt for outdoor formation',
    ],
  },
]

const grooming = [
  { icon: Scissors, title: 'Hair', body: 'Neatly groomed, off the ears and collar. No extreme styles or unnatural colors.' },
  { icon: Sparkles, title: 'Grooming', body: 'Clean shaven or neatly trimmed. Minimal, conservative jewelry only.' },
  { icon: Ribbon, title: 'Awards', body: 'Ribbons and badges mounted precisely per the placement diagram, no gaps.' },
  { icon: Shirt, title: 'Fit', body: 'Pressed with sharp creases. No frayed seams, loose threads, or missing buttons.' },
]

export default function UniformGuidesPage() {
  return (
    <main>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <span className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Standards & Appearance
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            Uniform Guides
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed text-pretty">
            The uniform is a symbol of the Corps. Know the standard, meet the standard, and wear it
            with pride. Below are the requirements for each uniform and inspection.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {uniforms.map((u) => (
            <article
              key={u.tag}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-accent px-2.5 py-1 font-display text-sm font-semibold tracking-wide text-accent-foreground uppercase">
                  {u.tag}
                </span>
                <h2 className="font-display text-xl font-semibold tracking-wide uppercase">
                  {u.name}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {u.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/uniform-detail.png"
              alt="Close-up of a JROTC dress uniform jacket with gold buttons, ribbon rack, and name plate"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-wide uppercase">
              Grooming & Inspection Standards
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Attention to detail wins inspections. Run through this checklist before every
              formation.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {grooming.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-lg border border-border bg-background p-4">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold tracking-wide uppercase">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
