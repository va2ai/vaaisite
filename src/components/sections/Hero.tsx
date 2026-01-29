interface HeroProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://r2.vaclaims.net/file/site/blue.jpg"
          alt="Abstract Legal Tech Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/90 to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
              <span className="material-symbols-outlined text-sm mr-1">verified_user</span>
              For VA-Accredited Attorneys & VSOs
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight font-serif">
              Cut VA evidence review time by 50%—with{' '}
              <span className="text-blue-800">citation-grounded AI</span>
            </h1>
            <p className="text-xl font-semibold text-slate-900 mb-4 max-w-2xl mx-auto lg:mx-0">
              For VA-accredited attorneys and VSOs
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Built for traceability, attorney review, and audit-ready outputs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => onOpenModal('consultation')}
                className="px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-800 transform hover:-translate-y-0.5 transition flex items-center justify-center"
              >
                Book a 15-min Workflow Audit
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
              <button
                onClick={() => onOpenModal('assessment')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-400 transition flex items-center justify-center"
              >
                Request Risk + RAG Assessment
              </button>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="material-symbols-outlined text-blue-600">health_and_safety</span>
                <span>VA-focused</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="material-symbols-outlined text-blue-600">link</span>
                <span>Citation traceability</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="material-symbols-outlined text-blue-600">fact_check</span>
                <span>Human review checkpoints</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="material-symbols-outlined text-blue-600">security</span>
                <span>Security-first architecture</span>
              </div>
            </div>
          </div>

          {/* Hero Visual / Demo Loop */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 transform hover:scale-105 transition duration-500">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <span className="text-xs text-slate-400 ml-auto flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live Processing
                </span>
              </div>

              {/* Animated workflow steps */}
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100 animate-pulse">
                  <span className="material-symbols-outlined text-blue-600 mt-1 mr-3">document_scanner</span>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm">Scanning Decision</h4>
                    <p className="text-xs text-blue-700 mt-1">
                      BVA 12-34567 • Sleep Apnea SC • 14 pages • 3 contested issues
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <span className="material-symbols-outlined text-amber-600 mt-1 mr-3">psychology</span>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-sm">Extracting Evidence</h4>
                    <p className="text-xs text-amber-700 mt-1">
                      Located: Dr. Smith nexus opinion • VA examiner concession • Benefit of doubt applied
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100">
                  <span className="material-symbols-outlined text-green-600 mt-1 mr-3">verified</span>
                  <div>
                    <h4 className="font-semibold text-green-900 text-sm">Citations Linked</h4>
                    <p className="text-xs text-green-700 mt-1">
                      3 findings → 3 source citations (pg 4 ¶2, pg 6 ¶1, pg 7 ¶4) • Ready for attorney review
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Processing Complete</span>
                  <span className="text-green-600 font-semibold">Done in 47s</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
