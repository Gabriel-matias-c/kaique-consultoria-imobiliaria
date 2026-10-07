import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/hero-kaique.png'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[700px] md:h-screen flex flex-col md:flex-row items-stretch overflow-hidden bg-tertiary">
          <div className="relative z-10 flex items-center px-6 md:px-16 py-20 md:py-0 md:w-[42%]">
            <div className="max-w-2xl text-on-primary">
              <span className="hidden md:block font-label-caps text-label-caps tracking-[0.3em] uppercase mb-6">Exclusividade em Araraquara/SP</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">Sua conquista <br />merece o melhor <br />cenário.</h1>
              <p className="font-body-lg text-body-lg mb-10 text-on-primary/80 max-w-lg">Kaique Nardini — Consultoria imobiliária de alto padrão em Araraquara e região.</p>
              <div className="flex flex-wrap gap-6">
                <Link to="/propriedades" className="px-10 py-5 bg-on-tertiary text-tertiary font-label-caps text-label-caps hover:bg-secondary-container transition-all">
                  Ver Portfólio
                </Link>
                <Link to="/contato" className="px-10 py-5 border border-on-tertiary text-on-tertiary font-label-caps text-label-caps hover:bg-on-tertiary hover:text-tertiary transition-all">
                  Consultoria Privada
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[55vh] md:h-auto md:w-[58%] overflow-hidden">
            <img
              src={heroImage}
              alt="Kaique Nardini"
              className="w-full h-full object-cover object-[center_2%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tertiary/50 to-transparent md:from-tertiary/20" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-stack-lg px-6 md:px-16 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-[4/5] bg-surface-container shadow-2xl overflow-hidden relative group">
                <img alt="Kaique Nardini" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrOfGdnYTxmj84CO3Nnyq_hUKaU1vOdCUSKI19SRi6OpXu_-3KQ9IRqGe8b48AbKXe3g03SVjUgjp_TCKgyF1R8CxpmcPht9MxLhV_q5SxqdB8D81X2g3gSj4_Z0l_uxJrQKWISHGDuHH1slVbh4NS9lMNH2x2AGVbVWF1Qy4E6zpqwncomAk2xdPeBpBrpTw6FfTKr3ZIWbmGBKEvMVbbHzE-KtG71pHJXj6vBJXP7t0gSTknOqbY5dJgEz8U3RW0MA" />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">O Especialista</span>
              <h2 className="font-display-lg text-headline-md mb-8">Kaique Nardini redefine o mercado imobiliário com excelência técnica e discrição.</h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg">
                <p>Corretor de Imóveis (CRECI 193374F), Kaique traz uma visão estratégica para negociações de alto padrão em Araraquara/SP.</p>
                <p>Sua trajetória é pautada na confiança e no entendimento profundo de que um imóvel é, antes de tudo, a materialização de um legado pessoal ou familiar.</p>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/30 flex gap-12">
                <div>
                  <div className="font-display-lg text-headline-md text-primary">+9 Anos</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">Experiência</div>
                </div>
                <div>
                  <div className="font-display-lg text-headline-md text-primary">Araraquara</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">Base Operacional</div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="https://instagram.com/lares_araraquara" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                  <span className="font-label-caps text-[11px] tracking-widest">@LARES_ARARAQUARA</span>
                </a>
                <span className="text-outline-variant">|</span>
                <a href="https://instagram.com/casas_araraquara" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
                  <span className="font-label-caps text-[11px] tracking-widest">@CASAS_ARARAQUARA</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Grid */}
        <section className="bg-surface-container-low py-stack-lg">
          <div className="px-6 md:px-16 max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="font-label-caps text-label-caps text-secondary mb-4 block">Acervo Selecionado</span>
                <h2 className="font-display-lg text-headline-md">Destaques da Temporada</h2>
              </div>
              <Link className="font-label-caps text-label-caps border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all" to="/propriedades">Explorar Todos</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="group bg-surface flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpQq-kfXgghdIUIATRHDtiSOxQXtzoBKhX3b980kNykghu3TYB42Lj2smOS5ZNo5zvUPHIV5JokZBHZqCkbumiY_qKyD_FiWyVi7gxEmbQL51UYKzBhjyx7eNXSdWvYmsDT50zddTWGkjYceOZn0VIkTj7JL0DcAkMLIHN0ejXM0PqwUxnWymyiIR7LNngoWt7YiIzNU4vc8QMhPESm4H8VAV3SJKLZZDjLzC-EDGlyIymtyCGiSzvAws1u7rQ-ORMpQ')]" />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-tertiary text-on-tertiary font-label-caps text-[10px] tracking-widest uppercase">Fachada Modena</div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">DESIGN MODERNO, ARARAQUARA</div>
                  <h3 className="font-display-lg text-headline-sm mb-4">Residência Modena</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-body-md text-primary font-bold">Sob Consulta</span>
                    <span className="material-symbols-outlined text-outline">architecture</span>
                  </div>
                </div>
              </div>
              <div className="group bg-surface flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM879--jNdvKm4AudzPDVD1Dat1fPPAFEL0ULmiIrEzcPV8hUKSSmrmDqaRc0jdFSlewSmVtD2HcMSTeTc7UsMdrvRnp4g4e3158gizryW87_skfUzNr-TgsGVZbQgmYMOAzMaN97a2A-OVJPAcBxm3JV6wQp6SarEPN6K9G5ImqhjV6AcdWPGf17mYaiAw3gYQ7ERC50DWFYLPUzMdr7scRsNtwg53lJ11hW-9Zf3_ApuFtAQBnrubcojjJeWdBnqhA')]" />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-tertiary text-on-tertiary font-label-caps text-[10px] tracking-widest uppercase">Gourmet</div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">PROJETO DE INTERIORES</div>
                  <h3 className="font-display-lg text-headline-sm mb-4">Cozinha Planejada</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-body-md text-primary font-bold">Vendido</span>
                    <span className="material-symbols-outlined text-outline">countertops</span>
                  </div>
                </div>
              </div>
              <div className="group bg-surface flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbZERrnooGMAi66Ues5B6zx6O_UJcxnWzzBxxo0BJmh9b-TP_dkeHu9BJNb7HAi9ncO6Nax_jqXyJ3p70BdPfdQsOsTSp-8_FiI9O4ddYPmwMahPncxceiciFQ24nagRyWDiAgwBw9Jq7N4zGAOuyIhqpzvgEMRA7dAfWTEKRGWNvt-VqryRz6WcWVHVUJJcfNIL6cE79lq-g1FfQZy6O-BJ_KYxpVMH758bx2IzlSwxG5kuyB-pvcw1ylxVPy_ZhafQ')]" />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-secondary text-on-tertiary font-label-caps text-[10px] tracking-widest uppercase">Área de Lazer</div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">LAZER EXCLUSIVO</div>
                  <h3 className="font-display-lg text-headline-sm mb-4">Espaço Piscina &amp; Sol</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                    <span className="font-body-md text-primary font-bold">Disponível</span>
                    <span className="material-symbols-outlined text-outline">pool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-stack-lg px-6 md:px-16 bg-tertiary text-on-tertiary">
          <div className="max-w-container-max mx-auto text-center">
            <span className="font-label-caps text-label-caps text-secondary-container mb-8 md:mb-12 block tracking-widest uppercase">Confiança &amp; Resultados</span>
            <div className="max-w-4xl mx-auto">
              <span className="material-symbols-outlined text-[36px] md:text-[48px] text-secondary-container mb-4 md:mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <blockquote className="font-display-lg text-headline-md md:text-display-lg mb-8 md:mb-12 leading-tight italic">
                "A capacidade do Kaique em entender nossas necessidades e apresentar oportunidades reais em Araraquara foi decisiva. Ele não vende apenas casas, ele garante bons investimentos."
              </blockquote>
              <div className="font-label-caps text-label-caps tracking-widest">— CLIENTE, INVESTIDOR LOCAL</div>
              <div className="mt-10 md:mt-20 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="font-label-caps text-[11px] md:text-headline-sm md:font-display-lg tracking-widest uppercase">@lares_araraquara</span>
                <span className="hidden md:inline text-outline-variant">|</span>
                <span className="font-label-caps text-[11px] md:text-headline-sm md:font-display-lg tracking-widest uppercase">@casas_araraquara</span>
                <span className="hidden md:inline text-outline-variant">|</span>
                <span className="font-label-caps text-[11px] md:text-headline-sm md:font-display-lg tracking-widest uppercase">CRECI 193374F</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="relative py-stack-lg overflow-hidden">
          <div className="px-6 md:px-16 max-w-container-max mx-auto relative z-10">
            <div className="bg-surface shadow-2xl p-12 md:p-24 flex flex-col md:flex-row items-center gap-12 border border-outline-variant/10">
              <div className="flex-1">
                <h2 className="font-display-lg text-headline-md mb-6">Comece seu próximo capítulo.</h2>
                <p className="font-body-lg text-on-surface-variant mb-0">Agende uma conversa privada para discutir seus requisitos específicos em Araraquara/SP ou conhecer nosso acervo off-market.</p>
              </div>
              <form className="flex-none w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4">
                  <input className="bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-4 px-0 w-full mb-4 font-body-md" placeholder="Seu E-mail" type="email" />
                  <button className="px-12 py-6 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:bg-secondary transition-all active:scale-95 w-full" type="submit">
                    Solicitar Acesso
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
