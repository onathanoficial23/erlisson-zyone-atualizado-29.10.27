import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, CheckCircle2 } from 'lucide-react';
import salesImage from '../assets/images/regenerated_image_1778212985182.png';

export default function EarningsEstimator() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest uppercase rounded-full mb-3">
            Margem Comercial
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-zyone-dark tracking-tighter uppercase">
            POTENCIAL COMERCIAL NA <span className="text-zyone-red">REVENDA DE PRODUTOS</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Confira como funciona a margem de revenda dos produtos Zyone adquiridos com 50% de desconto no atacado para venda direta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sales Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square group"
          >
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img 
                src={salesImage} 
                alt="Vendas Zyone" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
            </a>
          </motion.div>

          {/* Static Results / Promotion Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-zyone-red/10 rounded-xl flex items-center justify-center text-zyone-red group-hover:bg-zyone-red group-hover:text-white transition-colors shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-zyone-dark tracking-tight uppercase group-hover:text-zyone-red transition-colors">Lucro na Revenda</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest">De 100% até 250% de lucro nos produtos</p>
                </div>
              </a>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-gray-700 text-sm sm:text-base">Lucros de 100% até 250% na revenda de produtos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-gray-700 text-sm sm:text-base">Compre no atacado com 50% de desconto</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-gray-700 text-sm sm:text-base">Início acessível com produtos à sua escolha</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-gray-700 text-sm sm:text-base">Treinamentos e catálogo digital para revenda</span>
                </div>
              </div>

              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 sm:py-5 px-6 bg-zyone-red text-white rounded-xl font-black text-base sm:text-lg tracking-widest uppercase hover:bg-zyone-red-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-zyone-red/20 flex items-center justify-center gap-3 text-center"
              >
                CADASTRE-SE E COMECE AGORA
              </a>
            </div>

            <div className="bg-zyone-dark p-8 rounded-2xl text-white relative overflow-hidden group">
              <ShoppingBag className="absolute -right-8 -bottom-8 text-white/5 group-hover:scale-110 transition-transform duration-1000" size={160} />
              <p className="font-mono text-[10px] text-zyone-gold uppercase tracking-[0.2em] mb-2">OPORTUNIDADE DE REVENDA</p>
              <h4 className="text-2xl font-black tracking-tighter uppercase mb-4">
                Construa seu Negócio de <br /> <span className="text-zyone-gold">Cosméticos & Perfumaria</span>
              </h4>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                A Zyone disponibiliza perfumes finos de alta fixação e cosméticos para você atender clientes exigentes e construir sua carteira de vendas diretas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Compra no Atacado', bold: '50% DE DESCONTO' },
            { label: 'Suporte Completo', bold: 'PARA REVENDEDORES' },
            { label: 'Produtos de', bold: 'ALTA ACEITAÇÃO' },
            { label: 'Linha Completa', bold: 'DE PERFUMARIA FINA' }
          ].map((item, i) => (
            <div key={i} className="text-center p-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1 leading-none">{item.label}</p>
              <p className="text-xs font-black text-zyone-dark tracking-tighter leading-none">{item.bold}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer Legal Obrigatório para Google Ads */}
        <div className="mt-10 p-4 bg-white rounded-xl border border-gray-200 text-center text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
          <p>
            <strong>Aviso Legal sobre Margens e Resultados:</strong> As margens e lucros de 100% até 250% apresentados referem-se ao potencial de revenda direta dos produtos (como perfumes e cosméticos) adquiridos a preço de fábrica com desconto de atacado em relação ao preço sugerido ao consumidor final. Os resultados financeiros dependem única e exclusivamente do volume de vendas, dedicação, estratégias de atendimento e gestão individual de cada consultor autônomo. Não há promessa de ganhos fixos ou renda garantida.
          </p>
        </div>
      </div>
    </section>
  );
}
