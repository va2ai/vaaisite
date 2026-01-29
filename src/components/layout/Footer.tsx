interface FooterProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-blue-400 text-3xl mr-2">balance</span>
              <span className="font-bold text-xl text-white font-serif">
                VA Claims<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Defensible AI systems for VA claims professionals. Built for traceability, accuracy, and human oversight.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#demo" className="hover:text-blue-400 transition">Live Demo</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">Capabilities</a>
              </li>
              <li>
                <a href="#engagement" className="hover:text-blue-400 transition">Engagement Models</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">About</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Get Started</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onOpenModal('consultation')}
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Book Workflow Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('assessment')}
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">assessment</span>
                  Request Assessment
                </button>
              </li>
              <li className="pt-2 border-t border-slate-700">
                <a
                  href="mailto:va2ai@vaclaims.net"
                  className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">email</span>
                  va2ai@vaclaims.net
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/va2ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">link</span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/va2ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 AI Consulting for VA Claims. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>

        {/* Engagement Note */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>Available for remote engagements nationwide • On-site sessions by arrangement</p>
          <p className="mt-2">NDA-friendly • References and work samples available upon request</p>
        </div>
      </div>
    </footer>
  );
}
