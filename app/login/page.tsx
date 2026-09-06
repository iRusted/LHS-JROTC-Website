'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Lock, Mail, Shield, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/auth-provider'
import { cn } from '@/lib/utils'

type Mode = 'signin' | 'register'
type Status = 'idle' | 'loading' | 'success'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [mode, setMode] = useState<Mode>('signin')
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('loading')

    // Simulated authentication for this front-end demo.
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        login({
          name: name.trim() || 'J. Cadet',
          rank: 'Cadet',
          email: email.trim() || 'cadet@corps.edu',
        })
        router.push('/')
      }, 750)
    }, 1100)
  }

  const disabled = status !== 'idle'

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-primary px-4 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 22px)',
        }}
      />
      <div className="relative w-full max-w-md">
        <div className="mb-6 flex flex-col items-center text-center text-primary-foreground">
          <span className="flex size-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Shield className="size-7" aria-hidden="true" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-wide uppercase">
            Cadet Login
          </h1>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Access the Corps of Cadets portal.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
          {/* Mode toggle */}
          <div className="mb-6 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
            {(['signin', 'register'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => status === 'idle' && setMode(m)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition-all',
                  mode === m
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {m === 'signin' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <Field
                icon={User}
                label="Full Name"
                type="text"
                placeholder="Cadet full name"
                value={name}
                onChange={setName}
                disabled={disabled}
                required
              />
            )}
            <Field
              icon={Mail}
              label="Email"
              type="email"
              placeholder="cadet@corps.edu"
              value={email}
              onChange={setEmail}
              disabled={disabled}
              required
            />
            <Field
              icon={Lock}
              label="Password"
              type="password"
              placeholder="••••••••"
              value=""
              onChange={() => {}}
              disabled={disabled}
              uncontrolled
              required
            />

            {mode === 'signin' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs font-medium text-primary transition-colors hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={disabled}
              className={cn(
                'w-full text-base transition-all',
                status === 'success'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5 active:translate-y-0',
              )}
            >
              {status === 'loading' && <Loader2 className="size-4 animate-spin" />}
              {status === 'success' && <CheckCircle2 className="size-4" />}
              {status === 'idle' && (mode === 'signin' ? 'Sign In' : 'Create Account')}
              {status === 'loading' && 'Authenticating…'}
              {status === 'success' && 'Welcome, Cadet'}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
            This is a demonstration portal. Any credentials will sign you in.
          </p>
        </div>
      </div>
    </main>
  )
}

function Field({
  icon: Icon,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  uncontrolled,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  disabled?: boolean
  required?: boolean
  uncontrolled?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          {...(uncontrolled ? {} : { value, onChange: (e) => onChange(e.target.value) })}
          className="h-11 w-full rounded-lg border border-input bg-background pr-3 pl-9 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
        />
      </span>
    </label>
  )
}
