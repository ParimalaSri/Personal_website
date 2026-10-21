import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { profile } from '../data/profile'

const icon = 'text-muted transition hover:text-accent'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={icon}>
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={icon}>
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </li>
          )}
          {profile.email && (
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email" className={icon}>
                <Mail size={20} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  )
}
