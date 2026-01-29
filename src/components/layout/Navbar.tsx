import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenModal: (type: 'consultation' | 'assessment' | 'login') => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="material-symbols-outlined text-blue-900 text-3xl mr-2">balance</span>
            <span className="font-bold text-xl tracking-tight text-slate-900 font-serif">
              VA Claims<span className="text-blue-700">AI</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenModal('login')}
              className="text-slate-600 hover:text-blue-900 font-medium tracking-wide text-sm uppercase"
            >
              Login
            </button>
            <div className="h-6 w-px bg-slate-300 mx-2"></div>
            <button
              className="text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? '' : 'hidden'} bg-white border-b border-slate-200 shadow-lg absolute w-full`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">
            Live Demo
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">
            Capabilities
          </a>
          <a href="#engagement" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">
            Engagement
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg">
            About
          </a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('consultation'); }}
            className="w-full text-left px-3 py-3 text-blue-700 font-bold hover:bg-blue-50 rounded-lg"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
