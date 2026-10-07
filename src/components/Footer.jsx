import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-tertiary text-on-tertiary">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-margin-desktop py-stack-lg gap-12 max-w-container-max mx-auto">
        <div className="flex flex-col gap-6">
          <span className="font-display-lg text-headline-md">Kaique Nardini</span>
          <p className="font-body-md text-on-tertiary-container max-w-xs">
            Curadoria de residências exclusivas para o colecionador exigente.
            Especialista no mercado imobiliário de Araraquara.
          </p>
          <div className="flex flex-col gap-2 font-label-caps text-[12px] text-on-tertiary-container">
            <span>CRECI 193374F</span>
            <div className="flex gap-4 mt-2">
              <a
                className="hover:text-on-tertiary transition-colors flex items-center gap-1"
                href="https://instagram.com/lares_araraquara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
                @lares_araraquara
              </a>
              <a
                className="hover:text-on-tertiary transition-colors flex items-center gap-1"
                href="https://instagram.com/casas_araraquara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
                @casas_araraquara
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-tertiary">Navegação</span>
            <Link className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" to="/propriedades">Imóveis</Link>
            <Link className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" to="/sobre">Sobre</Link>
            <Link className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" to="/contato">Contato</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-tertiary">Legal</span>
            <a className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" href="#">Privacidade</a>
            <a className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" href="#">Termos</a>
            <a className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" href="#">Cookies</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-tertiary">Contato</span>
            <a className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" href="#">WhatsApp</a>
            <a className="font-body-md text-on-tertiary-container hover:text-on-tertiary transition-colors" href="#">E-mail</a>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/10 px-6 md:px-margin-desktop py-8 text-center">
        <span className="font-label-caps text-[10px] tracking-widest text-on-tertiary-container">
          © 2026 KAIQUE NARDINI. TODOS OS DIREITOS RESERVADOS. REPRESENTAÇÃO DISCRETA GARANTIDA EM ARARAQUARA E REGIÃO.
        </span>
      </div>
    </footer>
  )
}
