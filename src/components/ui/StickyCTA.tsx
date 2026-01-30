import { useState, useEffect } from 'react';

interface StickyCTAProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="p-3">
        <button
          onClick={() => onOpenModal('consultation')}
          className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold text-base shadow-lg active:bg-emerald-700 transition-all flex items-center justify-center gap-2"
        >
          <span>Book Workflow Audit</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
