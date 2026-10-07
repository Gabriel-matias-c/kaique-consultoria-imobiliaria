import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Início' },
  { to: '/propriedades', label: 'Propriedades' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/90 border-b border-outline-variant/20">
      <div className="flex justify-between items-center gap-4 px-4 sm:px-6 md:px-margin-desktop py-5 md:py-6 max-w-container-max mx-auto">
        <Link
          className="font-display-lg text-[15px] sm:text-headline-sm tracking-wide sm:tracking-widest text-primary uppercase whitespace-nowrap"
          to="/"
          onClick={() => setOpen(false)}
        >
          Kaique Nardini
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  active
                    ? 'font-label-caps text-label-caps text-primary border-b border-primary pb-1'
                    : 'font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="hidden sm:inline-block font-label-caps text-label-caps px-8 py-3 bg-primary text-on-primary hover:bg-secondary transition-all active:scale-95"
          >
            Consultar
          </Link>
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0"
          >
            <span className={`block h-px w-6 bg-primary transition-all ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-primary transition-all ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-6 py-8 flex flex-col gap-6">
          {LINKS.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={
                  active
                    ? 'font-label-caps text-label-caps text-primary'
                    : 'font-label-caps text-label-caps text-on-surface-variant'
                }
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="font-label-caps text-label-caps px-8 py-3 bg-primary text-on-primary text-center active:scale-95"
          >
            Consultar
          </Link>
        </div>
      )}
    </nav>
  )
}
