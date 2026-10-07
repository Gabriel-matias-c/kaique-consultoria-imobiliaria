import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8">
              <span className="font-label-caps text-label-caps text-secondary block mb-4">SOBRE O ESPECIALISTA</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-3xl">
                Kaique Nardini: Compromisso com a Excelência Imobiliária.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant italic">
                "O verdadeiro luxo reside na confiança, na transparência e no atendimento impecável."
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Intro */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group aspect-[4/5] overflow-hidden">
              <img alt="Kaique Nardini - CRECI 193374F" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbaE3riMwFHucPRFp2AaWvyIZ33fiUrGs_AAEZaQ1ofZaSr3ALAob6lzXjUwIYrex-L49_w3KDbRw-dpt8g6iz6M-7JiNvWC4IxjCIoSbEcpaI4QukuVHCTCSzG8ZomPoUsnyiDaXsG6RhNv5usyzxKXrslf58yqxZAJ-6BbPMPGcSIaA2QZD8-lUBn_MQl9udkzPaCdWowjvRgI93a2LyMiv5LmSu_Cu9eSZHhwjWFYELE3WOazDh0OX8VDxJ-Xup9g" />
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Kaique Nardini</h2>
              <span className="font-label-caps text-label-caps text-secondary block mb-8">CRECI 193374F</span>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p className="font-body-lg">Com <strong>+9 anos de experiência</strong> no mercado imobiliário de <strong>Araraquara/SP</strong>, Kaique Nardini estabeleceu-se como uma figura de autoridade e confiança para aqueles que buscam investimentos seguros e moradias de alto padrão.</p>
                <p>Sua trajetória é marcada por uma abordagem consultiva e sofisticada, focada em entender a singularidade de cada cliente. Através de sua curadoria exclusiva nas plataformas <span className="text-primary font-semibold">@lares_araraquara</span> e <span className="text-primary font-semibold">@casas_araraquara</span>, ele transforma a complexidade do mercado em uma experiência fluida e prestigiosa.</p>
                <p>O registro CRECI 193374F é mais do que um número; é a garantia de uma atuação ética e juridicamente impecável, fundamentada em anos de conhecimento regional profundo e resultados consistentes para os investidores mais exigentes da região.</p>
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-outline-variant/30">
                  <div>
                    <span className="block font-display-lg text-headline-md text-primary">+9</span>
                    <span className="font-label-caps text-label-caps">Anos de Mercado</span>
                  </div>
                  <div>
                    <span className="block font-display-lg text-headline-md text-primary">Elite</span>
                    <span className="font-label-caps text-label-caps">Curadoria Regional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface-container-low py-stack-lg">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-stack-md">
              <span className="font-label-caps text-label-caps text-secondary block mb-4">EXPERTISE LOCAL</span>
              <h2 className="font-display-lg text-headline-md text-primary">Serviços Consultivos Especializados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant/20">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">home_work</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Avaliação de Mercado</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">Análise técnica e mercadológica precisa para determinar o valor real de ativos imobiliários na região de Araraquara.</p>
                </div>
                <ul className="space-y-3 font-label-caps text-label-caps text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Comparativo de Mercado Local</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Auditoria de Potencial Construtivo</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Projeção de Valorização Regional</li>
                </ul>
              </div>
              <div className="bg-primary text-on-primary p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-secondary-container mb-8 block">photo_camera</span>
                  <h3 className="font-headline-sm text-headline-sm mb-4">Exposição Digital Elite</h3>
                  <p className="text-on-primary-container leading-relaxed mb-8">Seu imóvel apresentado com produção cinematográfica para um público qualificado através das plataformas @lares_araraquara e @casas_araraquara.</p>
                </div>
                <div className="relative z-10">
                  <Link to="/contato" className="font-label-caps text-label-caps border border-on-primary/30 px-6 py-3 hover:bg-white hover:text-primary transition-colors">Conhecer Estratégia</Link>
                </div>
                <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[240px]" style={{ fontVariationSettings: '"wght" 100' }}>share</span>
                </div>
              </div>
              <div className="bg-white p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant/20">
                <div>
                  <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">gavel</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Segurança Jurídica</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">Acompanhamento completo de ponta a ponta, garantindo que cada transação seja feita com total conformidade e tranquilidade.</p>
                </div>
                <ul className="space-y-3 font-label-caps text-label-caps text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Análise de Documentação (Due Diligence)</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Gestão de Contratos de Compra e Venda</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Suporte em Financiamentos Imobiliários</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto py-stack-lg">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <h2 className="font-display-lg text-headline-md text-primary md:sticky md:top-40">Marcos da Trajetória</h2>
              <p className="text-on-surface-variant mt-6 pr-8">Uma jornada dedicada a construir confiança e realizar investimentos seguros no coração de Araraquara.</p>
            </div>
            <div className="md:w-2/3 space-y-24 pt-10">
              <div className="relative pl-12 border-l border-outline-variant/30">
                <div className="absolute -left-[5px] top-0 w-[11px] h-[11px] bg-secondary rounded-full" />
                <span className="font-display-lg text-headline-sm text-secondary block mb-2">Fundação</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-4">Início da Excelência Técnica</h4>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">Início da jornada no mercado de Araraquara, priorizando a transparência e a especialização técnica como pilares fundamentais do atendimento.</p>
              </div>
              <div className="relative pl-12 border-l border-outline-variant/30">
                <div className="absolute -left-[5px] top-0 w-[11px] h-[11px] bg-secondary rounded-full" />
                <span className="font-display-lg text-headline-sm text-secondary block mb-2">+9 Anos</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-4">Liderança e Presença Digital</h4>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">Consolidação da autoridade regional através das marcas @lares_araraquara e @casas_araraquara, conectando as propriedades mais exclusivas aos compradores certos sob o registro CRECI 193374F.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-stack-lg">
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">Construa seu Legado Conosco</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Agende uma consultoria personalizada com Kaique Nardini e descubra o valor de uma assessoria de alto padrão em Araraquara.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="px-10 py-5 bg-primary text-on-primary font-label-caps text-label-caps hover:opacity-80 transition-all active:scale-95">Agendar Consultoria</Link>
              <Link to="/propriedades" className="px-10 py-5 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all">Ver Imóveis</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
