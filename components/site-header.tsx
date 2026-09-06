'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Shield, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/auth-provider'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/uniform-guides', label: 'Uniform Guides' },
  { href: '/events', label: 'Upcoming Events' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { cadet, logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Shield className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide uppercase">
              Cadet Portal
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] text-primary-foreground/70 uppercase">
              Corps of Cadets
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10',
                  active && 'text-accent',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300',
                    active && 'scale-x-100',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {cadet ? (
            <>
              <span className="text-sm">
                <span className="text-primary-foreground/70">{cadet.rank} </span>
                <span className="font-medium">{cadet.name}</span>
              </span>
              <Button
                onClick={logout}
                className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              nativeButton={false}
              render={<Link href="/login" />}
              className="bg-accent text-accent-foreground shadow-sm transition-transform hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0"
            >
              Cadet Login
            </Button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md hover:bg-primary-foreground/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium hover:bg-primary-foreground/10',
                  pathname === item.href && 'text-accent',
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-primary-foreground/10 pt-3">
              {cadet ? (
                <Button
                  onClick={() => {
                    logout()
                    setOpen(false)
                  }}
                  className="w-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Sign out ({cadet.name})
                </Button>
              ) : (
                <Button
                  nativeButton={false}
                  render={<Link href="/login" onClick={() => setOpen(false)} />}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Cadet Login
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
