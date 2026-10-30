import { useState } from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  FileText, 
  Lock, 
  X, 
  GraduationCap, 
  Sparkles, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Download
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | 'refund' | null>(null);

  return (
    <footer className="bg-zyone-dark text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Brand Info */}
          <div className="mb-10">
            <span className="text-4xl font-black tracking-tighter mb-4 block">
              ZYONE
            </span>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              Perfumaria fina inspirada e cosméticos de alta fixação. Uma oportunidade sólida de venda direta para consultores e revendedores independentes em todo o Brasil.
            </p>
          </div>

          {/* New Call to Action Button */}
          <div className="w-full max-w-sm">
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-2xl font-black text-lg tracking-widest uppercase transition-all shadow-2xl shadow-zyone-red/40 hover:scale-105"
            >
              CADASTRAR-SE NA ZYONE
            </a>
            <p className="mt-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
              Cadastro gratuito no Escritório Virtual
            </p>
          </div>
        </div>

        {/* Seção Exclusiva: Curso Gratuito Zyone - Atualizado Diariamente */}
        <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-zyone-dark border-2 border-blue-500/40 p-6 sm:p-10 shadow-2xl shadow-blue-950/60 text-center max-w-5xl mx-auto">
          {/* Efeito Glow Azul */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Badges de Destaque */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-black uppercase tracking-wider">
                <GraduationCap size={14} className="text-blue-400" />
                Treinamento Oficial para Novos Consultores
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-wider">
                <Sparkles size={14} className="text-emerald-400" />
                Atualizado Diariamente
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/15 text-xs font-bold uppercase tracking-wider">
                <BookOpen size={14} />
                100% Gratuito
              </span>
            </div>

            {/* Título & Descrição */}
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase mb-4 leading-tight">
              Curso Gratuito Zyone <br />
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Passo a Passo Para o Seu Sucesso na Revenda
              </span>
            </h3>

            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              Assista à série completa de aulas práticas organizadas pelo consultor <strong>Erlisson</strong>. 
              Aprenda a cadastrar clientes, utilizar o Escritório Virtual, montar seus primeiros pedidos com lucro máximo e aplicar técnicas de vendas de perfumaria fina diretamente pelo WhatsApp e redes sociais.
            </p>

            {/* Player de Vídeo / Playlist com Bloqueio de Saída */}
            <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-900/50 bg-black group mb-8">
              {/* Bloqueador de links externos do YouTube */}
              <div className="absolute top-0 inset-x-0 h-14 z-20 pointer-events-auto" />
              <div className="absolute bottom-0 right-0 w-28 h-12 z-20 pointer-events-auto" />

              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/d2pXeDXRUho?list=PL5-bxjhsur3zM1j6-aL9Sm-yz5BJoW5tm&rel=0&modestbranding=1&playsinline=1&enablejsapi=1" 
                title="Curso Gratuito Zyone - Atualizado Diariamente"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              />
            </div>

            {/* Grid com Tópicos do Curso */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto mb-8">
              {[
                {
                  title: 'Primeiros Passos',
                  desc: 'Como navegar no escritório virtual e entender sua pontuação.'
                },
                {
                  title: 'Demonstração & Venda',
                  desc: 'Técnicas de fixação e abordagem de clientes pelo catálogo.'
                },
                {
                  title: 'Gestão de Pedidos',
                  desc: 'Como escolher produtos campeões e calcular margem de 100% a 250%.'
                },
                {
                  title: 'Mentoria Direta',
                  desc: 'Suporte exclusivo no WhatsApp com Erlisson para toda a equipe.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase mb-1">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Módulo {idx + 1}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Botões de Ação do Curso */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
              >
                <span>Cadastrar na Equipe & Liberar Suporte</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl font-bold text-sm uppercase tracking-wider transition-all"
              >
                <MessageCircle size={16} className="text-green-400" />
                <span>Tirar Dúvidas do Curso no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Obrigatório do Google Ads */}
        <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
          <p className="font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-zyone-gold" />
            Transparência e Isenção de Responsabilidade
          </p>
          <p className="mb-2">
            <strong>Página de Consultor Independente:</strong> Este site é gerenciado e operado por Erlisson, Consultor Independente autorizado Zyone (ID/Convite: erlisson1996). Este portal não representa a diretoria executiva central da Zyone Perfumes e Cosméticos, destinando-se à divulgação e atendimento a novos revendedores interessados em atuar com venda direta.
          </p>
          <p>
            <strong>Aviso sobre Resultados e Margens de Lucro:</strong> Quaisquer menções a lucros de 100% até 250% referem-se à margem comercial obtida na revenda direta de perfumes e cosméticos adquiridos com desconto de atacado em relação ao preço sugerido ao consumidor final. Não garantimos nem prometemos rendimentos fixos, salários ou lucros garantidos. O faturamento de cada consultor autônomo é estritamente proporcional ao seu esforço individual, estratégia comercial e vendas realizadas.
          </p>
        </div>

        {/* Links de Políticas Legais (Exigidos pelo Google Ads) */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-xs font-bold text-gray-400">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors underline flex items-center gap-1 cursor-pointer"
          >
            <Lock size={14} /> Política de Privacidade
          </button>
          <span>•</span>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors underline flex items-center gap-1 cursor-pointer"
          >
            <FileText size={14} /> Termos de Uso
          </button>
          <span>•</span>
          <button 
            onClick={() => setActiveModal('disclaimer')}
            className="hover:text-white transition-colors underline flex items-center gap-1 cursor-pointer"
          >
            <ShieldCheck size={14} /> Aviso Legal de Ganhos
          </button>
          <span>•</span>
          <button 
            onClick={() => setActiveModal('refund')}
            className="hover:text-white transition-colors underline flex items-center gap-1 cursor-pointer"
          >
            <FileText size={14} /> Trocas e Devoluções
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-[11px] text-gray-400 font-medium text-center md:text-left">
            © {currentYear} Zyone Cosméticos. Divulgação por Consultor Independente Erlisson (ID: erlisson1996). Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-[11px]">
            <a 
              href="/site-zyone-completo.zip" 
              download="site-zyone-completo.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zyone-gold/20 hover:bg-zyone-gold/30 text-zyone-gold font-bold transition-all border border-zyone-gold/40 shadow-sm"
              title="Baixar backup completo (.zip) deste projeto"
            >
              <Download size={13} />
              <span>Baixar Projeto (.zip)</span>
            </a>
            <span>•</span>
            <a 
              href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              WhatsApp: (11) 91688-1597
            </a>
            <span>•</span>
            <span>E-mail: oliveiranethan@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a 
          href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-transform animate-pulse"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>

      {/* Modais Legais para Google Ads Compliance */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white text-gray-800 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-5 sm:p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black p-1 rounded-full bg-gray-100"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {activeModal === 'privacy' && (
              <div>
                <h3 className="text-2xl font-black text-zyone-dark mb-4">Política de Privacidade</h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    Esta Política de Privacidade esclarece como tratamos as informações dos usuários ao acessarem este site de divulgação e consultoria independente.
                  </p>
                  <h4 className="font-bold text-gray-900">1. Coleta de Dados</h4>
                  <p>
                    Não realizamos coleta oculta de informações pessoais. Quaisquer dados fornecidos espontaneamente por você (como nome ou telefone ao entrar em contato via WhatsApp ou ao clicar para realizar seu cadastro no Escritório Virtual oficial da Zyone) são utilizados unicamente para prestar suporte e esclarecer dúvidas sobre a revenda dos produtos.
                  </p>
                  <h4 className="font-bold text-gray-900">2. Uso de Cookies e Anúncios</h4>
                  <p>
                    Podemos utilizar ferramentas analíticas e cookies de rastreamento para mensurar a efetividade de anúncios digitais (como Google Ads e Meta Ads), com o objetivo de aprimorar a experiência de navegação e exibição de conteúdos relevantes.
                  </p>
                  <h4 className="font-bold text-gray-900">3. Segurança e Direitos (LGPD)</h4>
                  <p>
                    Em consonância com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar esclarecimentos, exclusão ou atualização de qualquer dado de contato que tenha nos transmitido voluntariamente.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div>
                <h3 className="text-2xl font-black text-zyone-dark mb-4">Termos de Uso</h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    Ao acessar este portal, você concorda em cumprir e respeitar os presentes Termos de Uso.
                  </p>
                  <h4 className="font-bold text-gray-900">1. Natureza do Site</h4>
                  <p>
                    Este site tem finalidade informativa e de conexão com o sistema oficial da marca Zyone Perfumes e Cosméticos, sendo operado de maneira autônoma por um Consultor Independente.
                  </p>
                  <h4 className="font-bold text-gray-900">2. Relação Comercial de Revenda</h4>
                  <p>
                    A atuação como revendedor ou consultor Zyone configura atividade comercial autônoma e independente de revenda de produtos, sem qualquer vínculo empregatício ou societário.
                  </p>
                  <h4 className="font-bold text-gray-900">3. Aquisição de Produtos</h4>
                  <p>
                    A compra de kits, pedidos e pagamentos é realizada diretamente na plataforma oficial da Zyone Cosméticos (escritorio.zyone.com.br), sujeita às regras de faturamento, prazos de entrega e garantias da fabricante.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div>
                <h3 className="text-2xl font-black text-zyone-dark mb-4">Aviso Legal de Ganhos</h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p className="font-bold text-zyone-red">
                    Declaração de Transparência sobre Ganhos e Resultados
                  </p>
                  <p>
                    Nenhuma informação presente neste site deve ser interpretada como promessa ou garantia de ganhos fixos, enriquecimento ou resultados garantidos.
                  </p>
                  <p>
                    A oportunidade Zyone baseia-se na revenda física e digital de produtos cosméticos e fragrâncias. O desconto de atacado permite margens de lucro de 100% até 250% nas vendas efetuadas pelo revendedor ao consumidor final conforme a linha de produtos.
                  </p>
                  <p>
                    O sucesso financeiro e o faturamento de cada revendedor dependem estritamente de suas habilidades de vendas, base de clientes, dedicação, gestão e persistência. Resultados passados ou estimativas não garantem rendimentos futuros.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'refund' && (
              <div>
                <h3 className="text-2xl font-black text-zyone-dark mb-4">Política de Trocas e Devoluções</h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    Todas as compras de kits e produtos para revenda são faturadas diretamente pela plataforma oficial da Zyone Cosméticos.
                  </p>
                  <h4 className="font-bold text-gray-900">1. Direito de Arrependimento</h4>
                  <p>
                    Conforme o Artigo 49 do Código de Defesa do Consumidor (CDC), para compras efetuadas fora do estabelecimento comercial (online), o consumidor ou consultor tem até 7 (sete) dias corridos a partir do recebimento para solicitar a devolução ou cancelamento do pedido sem penalidades, desde que os produtos estejam lacrados e intactos na embalagem original.
                  </p>
                  <h4 className="font-bold text-gray-900">2. Avarias e Defeitos de Fabricação</h4>
                  <p>
                    Caso algum item apresente defeito de válvula ou avaria no transporte, a substituição é garantida pela Zyone dentro do prazo legal de 30 dias mediante abertura de chamado no Escritório Virtual ou SAC oficial.
                  </p>
                  <h4 className="font-bold text-gray-900">3. Canais de Atendimento</h4>
                  <p>
                    Para suporte quanto a pedidos, trocas ou rastreamento, o consultor pode abrir ticket diretamente no Escritório Virtual ou acionar o consultor pelo WhatsApp (11) 91688-1597 ou e-mail oliveiranethan@gmail.com para orientações.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 bg-zyone-dark text-white rounded-xl font-bold text-xs uppercase hover:bg-black transition-colors"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
