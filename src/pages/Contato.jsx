import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: 'Aquisição de Imóvel',
    mensagem: '',
  })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-10 md:mb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-end">
            <div className="lg:col-span-8">
              <span className="font-label-caps text-label-caps text-secondary mb-3 md:mb-4 block uppercase tracking-widest">Kaique Nardini | CRECI 193374F</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 md:mb-8">Consultoria Exclusiva para Imóveis de Alto Padrão em Araraquara.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Gestão estratégica de patrimônio e curadoria imobiliária focada em ativos de luxo. Segurança, discrição e os melhores negócios no interior paulista.</p>
            </div>
            <div className="lg:col-span-4 hidden lg:block text-right">
              <div className="inline-flex flex-col items-end border-r-2 border-primary pr-6 py-2">
                <span className="font-display-lg text-headline-md leading-tight">193374F</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">REGISTRO PROFISSIONAL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Split Layout */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-10 md:mb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            {/* Lead Capture Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 lg:p-16 shadow-sm border border-outline-variant/10 rounded-lg">
              <h2 className="font-headline-md text-headline-md mb-6 md:mb-10">Inicie sua Consultoria</h2>
              {enviado ? (
                <p className="font-body-lg text-primary">Obrigado! Recebemos sua mensagem e entraremos em contato em breve.</p>
              ) : (
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Nome Completo</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 transition-all focus:border-primary" name="nome" placeholder="Seu nome" type="text" value={form.nome} onChange={handleChange} required />
                    </div>
                    <div className="group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">E-mail</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 transition-all focus:border-primary" name="email" placeholder="email@exemplo.com" type="email" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Telefone / WhatsApp</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 transition-all focus:border-primary" name="telefone" placeholder="(16) 99999-9999" type="tel" value={form.telefone} onChange={handleChange} />
                    </div>
                    <div className="group">
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Tipo de Interesse</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 transition-all focus:border-primary cursor-pointer appearance-none" name="interesse" value={form.interesse} onChange={handleChange}>
                        <option>Aquisição de Imóvel</option>
                        <option>Venda/Anúncio Exclusivo</option>
                        <option>Gestão de Portfólio</option>
                        <option>Outros Assuntos</option>
                      </select>
                    </div>
                  </div>
                  <div className="group">
                    <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">Mensagem</label>
                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 transition-all focus:border-primary resize-none" name="mensagem" placeholder="Conte-nos brevemente suas necessidades..." rows="4" value={form.mensagem} onChange={handleChange} />
                  </div>
                  <div className="pt-6">
                    <button className="w-full bg-primary text-on-primary py-6 font-label-caps text-label-caps hover:bg-secondary transition-all flex items-center justify-center gap-3 active:scale-[0.98]" type="submit">
                      Solicitar Consultoria Privada
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-on-surface-variant/60 font-body-md text-center">
                    Ao enviar este formulário, você concorda com nossos termos de privacidade. Seus dados são tratados com sigilo absoluto.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Details & Map */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                <div className="p-5 sm:p-8 bg-surface-container-low border-l-4 border-secondary transition-all hover:bg-surface-container">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Linha Privada</h3>
                      <p className="font-headline-sm text-headline-sm">(16) 3333-0000</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-8 bg-surface-container-low border-l-4 border-secondary transition-all hover:bg-surface-container">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    <div className="min-w-0">
                      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Canal Direto</h3>
                      <p className="font-headline-sm text-[16px] sm:text-headline-sm break-words">contato@kaiquenardini.com.br</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-8 bg-surface-container-low border-l-4 border-secondary transition-all hover:bg-surface-container">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Siga nossas curadorias</h3>
                    <div className="flex flex-col gap-3">
                      <a className="flex items-center gap-2 group" href="https://instagram.com/lares_araraquara" target="_blank" rel="noopener noreferrer">
                        <span className="font-headline-sm text-[18px] sm:text-[20px] group-hover:text-secondary transition-colors">@lares_araraquara</span>
                        <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                      </a>
                      <a className="flex items-center gap-2 group" href="https://instagram.com/casas_araraquara" target="_blank" rel="noopener noreferrer">
                        <span className="font-headline-sm text-[18px] sm:text-[20px] group-hover:text-secondary transition-colors">@casas_araraquara</span>
                        <span className="material-symbols-outlined text-[16px] text-secondary">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative group h-full min-h-[200px] sm:min-h-[300px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 z-10 bg-primary/10 pointer-events-none group-hover:bg-primary/0 transition-colors duration-500" />
                <div className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlr1CfLSkpFSFFFn2PIfcJxpxNAcC5NkgxGZtao2JFGOUYvspdHbIaJf1LmF0zfnD97vXy-ZQVZjM2JowvNlsuhS0D5jk8z49MUylnhv9SZ53F-hcUC070V57Qo60s7rHQMgtXVETCfqvvpnfG5u-NoUcVr0oA91rYQUHL8pl9bNLoPaTNqn66v3BfVUNjlxLTsaWnL0ympkzJ_6yFX2SECtqv7uAkzxNwipxmVSpq34ymQC3RQnaT')]" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-surface/90 backdrop-blur-md p-3 pr-6 sm:p-4 sm:pr-8 border-l-2 border-secondary shadow-xl">
                  <span className="font-label-caps text-label-caps text-secondary block mb-1">ÁREA DE ATUAÇÃO</span>
                  <span className="font-headline-sm text-[16px] sm:text-[18px]">Araraquara &amp; Região</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="bg-tertiary text-on-tertiary py-12 md:py-24 mb-10 md:mb-stack-lg">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="font-label-caps text-label-caps text-secondary-fixed mb-4">Experiência</h4>
              <p className="font-body-md opacity-70">Conhecimento profundo do mercado local e das tendências de valorização em condomínios de alto padrão.</p>
            </div>
            <div>
              <h4 className="font-label-caps text-label-caps text-secondary-fixed mb-4">Privacidade</h4>
              <p className="font-body-md opacity-70">Protocolos rígidos de confidencialidade para clientes que buscam discrição absoluta em suas transações.</p>
            </div>
            <div>
              <h4 className="font-label-caps text-label-caps text-secondary-fixed mb-4">Resultados</h4>
              <p className="font-body-md opacity-70">Foco total na conversão e na satisfação de investidores e famílias que buscam o melhor em moradia.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
