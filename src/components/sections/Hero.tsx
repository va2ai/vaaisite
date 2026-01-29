interface HeroProps {
  onOpenModal: (type: 'consultation' | 'assessment' | 'login') => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <header className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />
        <img
          src="/images/hero-bg-pattern.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            {/* Trust Pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-sm font-medium mb-6 border border-blue-200/60">
              <span className="material-symbols-outlined text-base mr-2">verified_user</span>
              For VA-Accredited Attorneys & VSOs
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight font-serif">
              Defensible AI Extraction for VA Claims –{' '}
              <span className="text-blue-700">Citation-Traced, Attorney-Approved, BVA-Ready</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Protect your license and your veteran's case with the only extraction engine built for BVA-level scrutiny. Audit every output against the source record in seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={() => onOpenModal('consultation')}
                className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-xl font-bold text-xl shadow-xl hover:bg-emerald-700 transform hover:-translate-y-1 transition-all flex items-center justify-center"
              >
                Book 15-min Workflow Audit
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
              <button
                onClick={() => onOpenModal('assessment')}
                className="w-full sm:w-auto px-8 py-5 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-700 transition-all flex items-center justify-center"
              >
                Request Free Risk + RAG Assessment
              </button>
            </div>

            {/* CTA Subtext */}
            <p className="text-sm text-slate-500 text-center lg:text-left">
              No sales pitch. Real workflow review.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/hero-visual.png"
              alt="VA ClaimsAI dashboard showing document analysis with citation tracking and claim granted status"
              className="w-full max-w-lg lg:max-w-none lg:w-[540px] h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/60">
          <p className="text-center text-slate-500 text-sm mb-2">
            Built for:
          </p>
          <p className="text-center text-slate-600 font-medium">
            VA-Accredited Attorneys • VSOs • Veterans Law Firms
          </p>
          <p className="text-center text-slate-400 text-sm mt-2">
            Human-verified • Citation-traceable • Audit-ready
          </p>
        </div>
      </div>
    </header>
  );
}
