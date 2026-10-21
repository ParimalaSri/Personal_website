import { useState, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'
import { profile } from '../data/profile'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'block w-full min-w-0 rounded-xl border border-line bg-bg px-4 py-3 text-base outline-none sm:text-sm transition placeholder:text-muted/70 focus:border-accent'

// With profile.formEndpoint set, the message is posted to that service and lands in your inbox.
// Without it, the form opens the visitor's email app with the message pre-filled (mailto).
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const viaService = Boolean(profile.formEndpoint)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    if (!viaService) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: `Portfolio message from ${name}` }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 min-[480px]:grid-cols-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="Your email"
            className={field}
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="How can I help?"
          className={`${field} resize-y`}
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[var(--accent-ink)] transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {viaService ? 'Send message' : 'Compose email'}
        </button>
        <p aria-live="polite" className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-accent'}`}>
          {status === 'sent' && 'Thanks, your message was sent.'}
          {status === 'error' && `Could not send. Please email ${profile.email} directly.`}
          {status === 'idle' && !viaService && (
            <span className="text-muted">Opens your email app with the message ready to send.</span>
          )}
        </p>
      </div>
    </form>
  )
}
