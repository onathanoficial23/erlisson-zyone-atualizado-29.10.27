import { TrendingUp, Star, Package, Zap, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const benefits = [
    {
      icon: <TrendingUp className="text-zyone-gold" size={32} />,
      title: 'Alto Lucro na Revenda',
      items: [
        'Obtenha de 100% até 250% de lucro na revenda dos produtos.',
        'Compre a preço de fábrica com 50% de desconto.'
      ]
    },
    {
      icon: <Star className="text-zyone-gold" size={32} />,
      title: 'Produto Premium',
      items: [
        'Perfumes com 25% de essência importada nobre.',
        'Alta fixação: fragrâncias marcantes e duradouras na pele.'
      ]
    },
    {
      icon: <Package className="text-zyone-gold" size={32} />,
      title: 'Variedade que Vende',
      items: [
        'Perfumes de 15ml, 28ml e 100ml.',
        'Hidratantes corporais e Body Splash exclusivos.'
      ]
    },
    {
      icon: <Zap className="text-zyone-gold" size={32} />,
      title: 'Fácil de Começar',
      items: [
        'Cadastro rápido e sem taxa de adesão.',
        'Suporte, catálogo digital e materiais de apoio para suas vendas.'
      ]
    }
  ];

  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest uppercase rounded-full mb-4">
              Revenda Direta de Cosméticos & Perfumaria
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zyone-dark leading-tight tracking-tighter uppercase">
              SEJA UM <span className="text-zyone-red leading-none block">CONSULTOR ZYONE</span>
            </h1>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              <p>
                Inicie seu próprio negócio revendendo perfumes e cosméticos de alta fixação da Zyone. Tenha acesso a produtos com preço de fábrica, no mínimo 50% de desconto nas compras e até 250% de lucro na revenda direta.
              </p>
              <p>
                Trabalhe com flexibilidade de horários, catálogo digital interativo, treinamentos e uma linha completa de fragrâncias inspiradas na perfumaria fina e árabes com excelente aceitação de mercado.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-xl font-black text-base sm:text-lg shadow-xl shadow-zyone-red/20 transition-all hover:-translate-y-1 group uppercase tracking-tight text-center"
              >
                <span>QUERO ME CADASTRAR AGORA</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1 group uppercase tracking-tight text-center"
              >
                <span>FALE COM UM CONSULTOR</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <MessageCircle className="ml-2 shrink-0" size={20} />
                </motion.span>
              </a>
            </div>

            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 sm:mt-12 bg-zyone-red p-6 rounded-2xl text-white relative overflow-hidden group block hover:bg-zyone-red-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-zyone-red/30"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Zap size={20} className="fill-white" />
                  Comece agora na Zyone
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  Cadastre-se gratuitamente e tenha acesso imediato ao catálogo e preços de atacado.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform pointer-events-none">
                <TrendingUp size={100} />
              </div>
            </a>
          </motion.div>

          {/* Right Column: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zyone-dark mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 leading-snug flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-zyone-red mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
