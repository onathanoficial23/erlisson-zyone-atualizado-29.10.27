import { QrCode, CreditCard, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PaymentTutorials() {
  const methods = [
    {
      id: 'pix',
      tag: 'Aprovação Imediata',
      title: 'Via PIX',
      description: 'Método mais rápido: o sistema compensa instantaneamente e seu pedido é liberado de imediato.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/JVItnZaGJpA?start=11&rel=0&modestbranding=1&playsinline=1&enablejsapi=1',
      icon: <QrCode size={24} />,
      colorClass: {
        badge: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
        iconBg: 'bg-emerald-500 text-white',
        border: 'border-emerald-200 hover:border-emerald-500',
        glow: 'from-emerald-500/10 via-transparent to-transparent',
        accentText: 'text-emerald-700',
        shadow: 'hover:shadow-emerald-500/20',
        ring: 'focus-within:ring-emerald-500'
      }
    },
    {
      id: 'cartao',
      tag: 'Parcelamento Fácil',
      title: 'Via Crédito / Débito',
      description: 'Pague à vista no débito ou parcele seu primeiro pedido com total comodidade e segurança.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/YWJLkjJeDk8?start=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1',
      icon: <CreditCard size={24} />,
      colorClass: {
        badge: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
        iconBg: 'bg-indigo-600 text-white',
        border: 'border-indigo-200 hover:border-indigo-600',
        glow: 'from-indigo-500/10 via-transparent to-transparent',
        accentText: 'text-indigo-700',
        shadow: 'hover:shadow-indigo-500/20',
        ring: 'focus-within:ring-indigo-500'
      }
    },
    {
      id: 'boleto',
      tag: 'À Vista no Banco',
      title: 'Via Boleto Bancário',
      description: 'Gere o boleto bancário no sistema e pague pelo internet banking, aplicativo ou lotérica.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/aKMeupClD_g?rel=0&modestbranding=1&playsinline=1&enablejsapi=1',
      icon: <FileText size={24} />,
      colorClass: {
        badge: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
        iconBg: 'bg-amber-500 text-white',
        border: 'border-amber-200 hover:border-amber-500',
        glow: 'from-amber-500/10 via-transparent to-transparent',
        accentText: 'text-amber-800',
        shadow: 'hover:shadow-amber-500/20',
        ring: 'focus-within:ring-amber-500'
      }
    }
  ];

  return (
    <section id="tutoriais-pagamento" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-indigo-500/5 to-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest rounded-full uppercase mb-4"
          >
            Passo a Passo de Pedido
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-tight mb-4"
          >
            Como Fazer o Pagamento <br />
            <span className="text-zyone-red">do seu Pedido na Zyone</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg font-medium"
          >
            Assista aos tutoriais práticos abaixo e escolha o método mais conveniente para realizar o pagamento no seu Escritório Virtual.
          </motion.p>
        </div>

        {/* Grid de Tutoriais */}
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-3xl p-6 border-2 shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${method.colorClass.border} ${method.colorClass.shadow}`}
            >
              {/* Subtle Ambient Top Glow */}
              <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${method.colorClass.glow} pointer-events-none`} />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${method.colorClass.iconBg}`}>
                    {method.icon}
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${method.colorClass.badge}`}>
                    {method.tag}
                  </span>
                </div>

                <h3 className={`text-2xl font-black tracking-tight mb-2 uppercase ${method.colorClass.accentText}`}>
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                  {method.description}
                </p>

                {/* Video Container with YouTube exit protection */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md mb-6 bg-black group">
                  {/* Bloqueador de topo para reter usuário na página */}
                  <div className="absolute top-0 inset-x-0 h-12 z-20 pointer-events-auto" />
                  
                  {/* Bloqueador de canto inferior direito */}
                  <div className="absolute bottom-0 right-0 w-24 h-10 z-20 pointer-events-auto" />

                  <iframe
                    className="w-full h-full"
                    src={method.videoUrl}
                    title={`Tutorial de Pagamento ${method.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Botão de Ação Direta */}
              <a
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border transition-colors ${method.colorClass.badge} hover:bg-zyone-dark hover:text-white hover:border-zyone-dark`}
              >
                Pagar via {method.title.replace('Via ', '')}
                <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Suporte Rápido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 text-left">
            <CheckCircle2 size={24} className="text-green-500 shrink-0" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Ficou com alguma dúvida sobre o pagamento?</p>
              <p className="text-xs text-gray-500">Nosso time de consultores auxilia você na finalização do seu primeiro pedido.</p>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md shadow-green-500/20"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
