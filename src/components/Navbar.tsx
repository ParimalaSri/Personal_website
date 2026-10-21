import { useEffect, useState } from 'react'
import { Briefcase, FolderGit2, Layers, Mail, Moon, Sun, User } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

const links = [
  { id: 'about', label: 'About', Icon: User },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'skills', label: 'Skills', Icon: Layers },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

// Floating pill dock fixed to the bottom of the viewport.
export default function Navbar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-3 md:pb-5">
      <nav
        aria-label="Primary"
        className="glass pointer-events-auto rounded-full shadow-lg"
      >
        <ul className="flex items-center gap-0.5 px-2 py-1.5 md:gap-1 md:px-3 md:py-2">
          {links.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`flex flex-col items-center gap-0.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition md:flex-row md:gap-2 md:px-3.5 md:py-2 md:text-sm ${
                  active === id ? 'bg-[var(--surface-hover)] text-accent' : 'text-muted hover:text-fg'
                }`}
              >
                <Icon size={16} aria-hidden />
                <span>{label}</span>
              </a>
            </li>
          ))}
          <li className="ml-1 border-l border-line pl-1 md:pl-2">
            <button
              onClick={onToggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:text-accent"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
