import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
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
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#demo" className="text-slate-600 hover:text-blue-700 font-medium transition">
              Live Demo
            </a>
            <a href="#services" className="text-slate-600 hover:text-blue-700 font-medium transition">
              Capabilities
            </a>
            <a href="#engagement" className="text-slate-600 hover:text-blue-700 font-medium transition">
              Engagement
            </a>
            <a href="#about" className="text-slate-600 hover:text-blue-700 font-medium transition">
              About
            </a>
            <button
              onClick={() => onOpenModal('consultation')}
              className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition shadow-sm hover:shadow-md"
            >
              Schedule Consultation
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-white border-b border-slate-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#demo" className="block px-3 py-2 text-slate-600 font-medium">
            Live Demo
          </a>
          <a href="#services" className="block px-3 py-2 text-slate-600 font-medium">
            Capabilities
          </a>
          <a href="#engagement" className="block px-3 py-2 text-slate-600 font-medium">
            Engagement
          </a>
          <a href="#about" className="block px-3 py-2 text-slate-600 font-medium">
            About
          </a>
          <button
            onClick={() => onOpenModal('consultation')}
            className="w-full text-left px-3 py-2 text-blue-700 font-bold"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
