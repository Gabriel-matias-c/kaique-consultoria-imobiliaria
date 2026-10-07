import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LISTINGS = [
  {
    id: 1,
    tag: 'DESTAQUE',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCW5mgN2q_1SPIYLmRQxF5DUxYMQuszTtZ02w1giLMcD7VKxWch4PXMF55AmeqP2VLuXPPIfAwwSGlQx4c2vLIaWD-NS3B-_rfiPCxTwcoEKMdE1XvQdA1_474okLhjj3gGVYuDUNawcXYET2OBVSQkkO6z3JA8zlQDBwPqXVuLZ4G236CwOqI5NeUz192I5Oa2u5EJIg1gkPeaVfzj18IzM8H3vLzl7Rw7mCB8AkaFiDJuhAtoSsfeREylDHnYIqHuwQ',
    location: 'ARARAQUARA, BRASIL',
    title: 'Fachada Modena',
    price: 'Sob Consulta',
    features: [
      { icon: 'architecture', label: 'DESIGN CONTEMPORÂNEO' },
      { icon: 'bed', label: 'SUÍTES AMPLAS' },
      { icon: 'square_foot', label: 'ÁREA NOBRE' },
    ],
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-CO1mTJfjxLqfmJqG5eJU_8yVw0ZVQ7NwU2uRDSnwxAmrYvB3qX3Rbh9knQLF80_Kd_X9O64ovuxuo2pFfyHwyt1IzS5cOx_ajFo-xo_2Nah1D1X95vvhQBN4T4dM2n59OllB86VxLrnxfCjPegUf_HRREmVPlLmW5GAGttIF6A63MecvPjJmtJf67oqFZeN4pG5cGtU8Wjyo4ytyS9okDLFeoH6gbHlHP5Dkp1_pxglL3BE3sp6Sqjh1g-6TuMHXlA',
    location: 'ARARAQUARA, SÃO PAULO',
    title: 'Cozinha Gourmet',
    price: 'Sob Consulta',
    features: [
      { icon: 'restaurant', label: 'ACABAMENTO PREMIUM' },
      { icon: 'countertops', label: 'DESIGN MINIMALISTA' },
      { icon: 'kitchen', label: 'EQUIPADA' },
    ],
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXaU7TP0frRUN1QSoFVwkPrIfiW5vmDS38s9I41Lw_bWcpGBFJdHQS4jxGnMEI9iSe3we6hWsuTTiRwWV7lRsNpyecmWs5TgGVDB15upiMl0WYa8L-KgMHIpGiXU7vXcGrJj03TNcUIDh6_QoePhIM4Fi_VnwMEf6Xuyre7ZxPLVlD6vj5SOy1fGZ3Ed8Gb0W0MSFnCiX0H5L57EwMVtfXPkNRNZ85JWFsSajWIANC7OfrHS431H66OafQgYEZP51BUA',
    location: 'CONDOMÍNIO EXCLUSIVO, ARARAQUARA',
    title: 'Área de Lazer Completa',
    price: 'Sob Consulta',
    features: [
      { icon: 'pool', label: 'PISCINA PRIVATIVA' },
      { icon: 'deck', label: 'SOLARIUM' },
      { icon: 'potted_plant', label: 'PAISAGISMO' },
    ],
  },
]

const OFF_MARKET_IMAGES = [
  {
    alt: 'Escadaria de luxo',
    label: 'ESTRITAMENTE CONFIDENCIAL',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjkDyv4cQwSDtTRpDDPtTA568u1VpoyfuJlUtfYE5K16sFPL7g3jlaUCVSq1yEtUq6i22YXUAIXIF7m3EA52xijUGs1EO1696Ff5WT2j7HRltNOKH_rfQDcmDWYDajGmygQo36rDZdhjYSPdYxE2TB_qNO6lGk-4B417pnleq4WhLKCwsK9bJCx_fYqjjgDGu4bbhuKv8XP4HHl1kCxepFqVEGujVPhzPWeQCJE6q3I74pHah2a66O',
  },
  {
    alt: 'Residência noturna',
    label: 'CLIENTES VERIFICADOS',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEXGWdyjgledL_dFYgI7rM8KAVro40FcqKfBSZpVjTB26stn4x3HXSX2bwWK4Lzu3hOskpMu9kT8Kjw9t3HIf5zSVtMpvpefIF3yJDlE4QtVKQ9ovh5Theox4GUxN1N1QAQnNH-fV5ITGj79K_c1OSQUm7ICWDWVqdG5QlTyel20-GQfgRTTYVBLvbHurBDqyX3faCh3TDKgN-WUAyxM-AG3FWwE-nXQ1OlRGIcLSIeJb1dTKqpxi9',
  },
  {
    alt: 'Detalhe arquitetônico',
    label: 'AQUISIÇÃO DISCRETA',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZY2TcB5oquaMxNbNGJfiE5UxW7mhPYUCxOqDo2IJg7Dsrn8HajVspHAVDKu1eEuQSwuzAdY06RZoS_ttsyPytYK0hdQpuwyZX3kE5c5gDDAguXy33_d-KbqZX8sK-dVnqy7cGJ69nVVwoPS09knXHNmDLAbaod76Qm4lb4dyMBbDa3kt-STji2EpA31QV12hryFOzM7n4O8O12rt7H8sbqV9Tw7YbbC1q6rXZTUln31yEF_YnLrVq',
  },
  {
    alt: 'Escritório clássico',
    label: 'LISTAGEM PRIVADA',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnhPn_Z0C9a18_sQwKnzx8Rl25FFy3ZH77a94Lnu74Mq9XQvxUim-ua096o65iNo_y_2Nzr8zays_SucFjE0PzdnMQ8ktLNDMq2HoDX96jIBS-vYmOi8CEWNV8b55Kz8JvDxeA6vW4UcbTnJ_qSvGJyzSNZYuZPKnw77GIGxIFD5aXRLV0j9Or8Z2awspexHuhLFjKs-EZRNFgH-O18ptX2_Z7ROveW1rSY0o2OvsBQ3IJJ9R-IDZ7',
  },
]

export default function Propriedades() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        {/* Hero & Filter Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">COLEÇÃO EXCLUSIVA</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Espaços Singulares em Araraquara.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Um portfólio curado das residências mais significativas em Araraquara e região. Cada propriedade representa um diálogo único entre o ambiente e o design de alto padrão.
              </p>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="font-label-caps text-label-caps">ORDENAR POR</span>
              <select className="bg-transparent border-none font-label-caps text-label-caps focus:ring-0 cursor-pointer text-primary">
                <option>RECENTES</option>
                <option>PREÇO: MAIOR PARA MENOR</option>
                <option>PREÇO: MENOR PARA MAIOR</option>
              </select>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/30 border border-outline-variant/30 overflow-hidden">
            <div className="bg-surface p-6 group cursor-pointer hover:bg-surface-container transition-colors">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">LOCALIZAÇÃO</label>
              <div className="flex justify-between items-center">
                <span className="font-headline-sm text-headline-sm">Todas as Regiões</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
              </div>
            </div>
            <div className="bg-surface p-6 group cursor-pointer hover:bg-surface-container transition-colors">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">TIPO DE IMÓVEL</label>
              <div className="flex justify-between items-center">
                <span className="font-headline-sm text-headline-sm">Residenciais</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
              </div>
            </div>
            <div className="bg-surface p-6 group cursor-pointer hover:bg-surface-container transition-colors">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block">FAIXA DE PREÇO</label>
              <div className="flex justify-between items-center">
                <span className="font-headline-sm text-headline-sm">R$ 1M — R$ 10M+</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
              </div>
            </div>
            <div className="bg-primary p-6 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-label-caps text-label-caps text-on-primary">APLICAR FILTROS</span>
            </div>
          </div>
        </section>

        {/* Listing Grid */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="space-y-stack-lg">
            {LISTINGS.map((listing) => (
              <article key={listing.id} className="group cursor-pointer overflow-hidden">
                <div className="relative h-[400px] md:h-[716px] overflow-hidden mb-8">
                  <img
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    src={listing.image}
                  />
                  {listing.tag && (
                    <div className="absolute top-8 left-8">
                      <span className="bg-surface/90 backdrop-blur px-4 py-2 font-label-caps text-label-caps">{listing.tag}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">{listing.location}</span>
                    <h2 className="font-display-lg text-headline-md md:text-display-lg mt-2 mb-4 group-hover:text-secondary transition-colors">{listing.title}</h2>
                    <div className="flex flex-wrap gap-8">
                      {listing.features.map((f) => (
                        <div key={f.label} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-outline">{f.icon}</span>
                          <span className="font-label-caps text-label-caps">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-display-lg text-headline-md block mb-2">{listing.price}</span>
                    <button className="inline-flex items-center gap-2 font-label-caps text-label-caps group/btn border-b border-transparent hover:border-primary transition-all pb-1">
                      VER DETALHES <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Off-Market Opportunities Section */}
        <section className="mt-stack-lg bg-tertiary text-on-tertiary py-stack-lg overflow-hidden relative">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-label-caps text-label-caps text-secondary-container mb-4 block tracking-widest">PORTFÓLIO PRIVADO</span>
                <h2 className="font-display-lg text-headline-md md:text-display-lg mb-8 leading-tight">Oportunidades Off-Market.</h2>
                <p className="font-body-lg text-on-tertiary-container mb-10 leading-relaxed max-w-lg">
                  Mantemos uma seleção discreta de ativos ultra-prime que nunca chegam ao mercado público. O acesso a essas propriedades requer credenciais verificadas.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps px-10 py-4 hover:bg-white transition-colors duration-300">
                    SOLICITAR ACESSO
                  </button>
                  <button className="border border-on-tertiary-container font-label-caps text-label-caps px-10 py-4 hover:bg-on-tertiary-container/10 transition-colors duration-300">
                    FALAR COM UM CONSULTOR
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  {OFF_MARKET_IMAGES.slice(0, 2).map((img) => (
                    <div key={img.label} className="aspect-[3/4] bg-primary-container relative overflow-hidden group">
                      <img alt={img.alt} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src={img.image} />
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <span className="font-label-caps text-[10px] text-center border border-secondary-container/30 p-2">{img.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {OFF_MARKET_IMAGES.slice(2, 4).map((img) => (
                    <div key={img.label} className="aspect-[3/4] bg-primary-container relative overflow-hidden group">
                      <img alt={img.alt} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src={img.image} />
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <span className="font-label-caps text-[10px] text-center border border-secondary-container/30 p-2">{img.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Contact CTA */}
        <section className="py-stack-lg px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="font-headline-md text-headline-md mb-6">Mantenha-se informado.</h3>
            <p className="font-body-md text-on-surface-variant mb-8">Receba insights mensais sobre as tendências mais significativas do mercado imobiliário de luxo em Araraquara.</p>
            <form className="flex border-b border-primary pb-2 group" onSubmit={(e) => e.preventDefault()}>
              <input className="bg-transparent border-none w-full focus:ring-0 font-body-md placeholder:text-outline-variant/60" placeholder="Seu endereço de e-mail" type="email" />
              <button className="font-label-caps text-label-caps hover:text-secondary transition-colors" type="submit">INSCREVER</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
