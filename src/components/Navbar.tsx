import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'KITS ZYONE', href: '#kits' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Apresentação', href: '#apresentacao' },
    { name: 'Cadastro', href: 'https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-zyone-dark">
              ZYONE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gray-600 hover:text-zyone-red transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle size={14} />
              WHATSAPP
            </a>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <UserPlus size={14} />
              CADASTRE-SE
            </a>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zyone-dark hover:bg-black text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <LogIn size={14} />
              ESCRITÓRIO
            </a>
          </div>

          {/* Tablet Quick Action + Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-zyone-red text-white rounded-lg text-xs font-bold"
            >
              Cadastre-se
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-zyone-red transition-colors rounded-lg focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block px-3 py-2.5 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-zyone-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a 
                  href="https://api.whatsapp.com/send?phone=5511916881597&text=Oi%2C%20Erlisson..%20Vim%20pelo%20site%20da%20*ZYONE*%20e%20quero%20saber%20como%20me%20cadastrar%20e%20revender%20%F0%9F%92%8E" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-black text-sm text-center shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  FALAR NO WHATSAPP
                </a>
                <a 
                  href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-xl font-black text-sm text-center shadow-md shadow-zyone-red/20"
                >
                  <UserPlus size={18} />
                  CADASTRE-SE NA ZYONE
                </a>
                <a 
                  href="https://escritorio.zyone.com.br/cadastro#?id=erlisson1996&convite=MTU3OQ%3D%3D" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-zyone-dark hover:bg-black text-white rounded-xl font-bold text-sm text-center"
                >
                  <LogIn size={18} />
                  ACESSAR ESCRITÓRIO VIRTUAL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
