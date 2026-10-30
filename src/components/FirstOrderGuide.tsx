import { ShoppingCart, Sparkles, CheckCircle2, ArrowRight, PackageCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function FirstOrderGuide() {
  const tips = [
    {
      title: 'Produtos com Maior Giro',
      description: 'Priorize os perfumes de 15ml e 28ml: baixo custo, altíssima aceitação e facilidade de venda imediata.'
    },
    {
      title: 'Desconto de 50% Automático',
      description: 'Ao montar o pedido no Escritório Virtual, os preços já são calculados no valor de atacado direto da fábrica.'
    },
    {
      title: 'Mostruário e Pronta-Entrega',
      description: 'Tenha frascos para demonstração rápida aos seus primeiros clientes e garanta pedidos no mesmo dia.'
    }
  ];

  return (
    <section id="primeiro-pedido" className="py-24 bg-zyone-dark text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-zyone-red/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zyone-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-zyone-gold/15 text-zyone-gold text-xs font-black tracking-widest rounded-full uppercase mb-4 border border-zyone-gold/20"
          >
            <Sparkles size={14} /> Passo a Passo Prático
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight mb-4"
          >
            Indicação de <span className="text-zyone-gold">Primeira Compra</span> <br />
            <span className="text-zyone-red">Como Montar seu Pedido</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg font-medium leading-relaxed"
          >
            Veja na prática como navegar pelo Escritório Virtual, escolher as fragrâncias com mais saída e montar seu primeiro carrinho com o máximo de rentabilidade.
          </motion.p>
        </div>

        {/* Content Grid: Video + Strategy Checklist */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Video Container (7 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/80 bg-black group">
              {/* Bloqueador de topo para reter usuário na página */}
              <div className="absolute top-0 inset-x-0 h-14 z-20 pointer-events-auto" />
              
              {/* Bloqueador de canto inferior direito */}
              <div className="absolute bottom-0 right-0 w-24 h-12 z-20 pointer-events-auto" />

              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/O3dhNWLMHlc?start=80&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                title="Indicação de Primeira Compra Zyone"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              />

              {/* Subtitle tag */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-3xl" />
            </div>

            <p className="mt-4 text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-2">
              <Zap size={14} className="text-zyone-gold" />
              Vídeo direto do Escritório Virtual com dicas práticas de carrinho
            </p>
          </motion.div>

          {/* Practical Strategy Card (5 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zyone-red flex items-center justify-center text-white shadow-lg shadow-zyone-red/30">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">Dicas para seu Pedido</h3>
                  <p className="text-xs text-zyone-gold font-bold uppercase tracking-widest">Estratégia Recomendada</p>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <CheckCircle2 size={20} className="text-zyone-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{tip.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-xl font-black text-sm tracking-wider uppercase transition-all shadow-xl shadow-zyone-red/30 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                MONTAR PEDIDO NO ESCRITÓRIO
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-colors text-center block border border-white/10"
              >
                Precisa de Ajuda com a Lista? Fale no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
