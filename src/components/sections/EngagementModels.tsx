interface EngagementModelsProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function EngagementModels({ onOpenModal }: EngagementModelsProps) {
  return (
    <section id="engagement" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center font-serif mb-6">Engagement Models</h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Flexible engagement options from quick assessments to full production implementation
        </p>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div
            className="hidden md:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-green-600"
            style={{ top: '80px' }}
          />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Phase 1 */}
            <div className="relative h-full">
              <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Phase 1
                </div>
                <div className="text-center mt-4 mb-6">
                  <span className="material-symbols-outlined text-5xl text-blue-600 mb-3 block">assessment</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Workflow Assessment</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-4">1-2 weeks</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-200">
                  <p className="text-xs font-bold text-blue-900 mb-1">What happens:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Workflow mapping session</li>
                    <li>• Risk assessment review</li>
                    <li>• ROI opportunity analysis</li>
                    <li>• Phased implementation roadmap</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-grow">
                  <p className="text-xs font-bold text-green-900 mb-1">Best for:</p>
                  <p className="text-xs text-slate-700">
                    Teams exploring AI safely and want clear understanding of risks + benefits before committing
                  </p>
                </div>

                <button
                  onClick={() => onOpenModal('assessment')}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md mt-6"
                >
                  Request Assessment
                </button>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative h-full">
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Phase 2
                </div>
                <div className="text-center mt-4 mb-6">
                  <span className="material-symbols-outlined text-5xl text-amber-600 mb-3 block">rocket_launch</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Prototype Sprint</h3>
                  <p className="text-sm text-amber-600 font-semibold mb-4">2-4 weeks</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-3 mb-4 border border-amber-200">
                  <p className="text-xs font-bold text-amber-900 mb-1">What happens:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Build one high-impact workflow</li>
                    <li>• Rapid development iteration</li>
                    <li>• Working demo with your data</li>
                    <li>• Performance metrics captured</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-grow">
                  <p className="text-xs font-bold text-green-900 mb-1">Best for:</p>
                  <p className="text-xs text-slate-700">
                    Validating one workflow fast with measurable results before broader rollout
                  </p>
                </div>

                <button
                  onClick={() => onOpenModal('consultation')}
                  className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition shadow-md mt-6"
                >
                  Discuss Sprint
                </button>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative h-full">
              <div className="bg-white border-2 border-green-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Phase 3
                </div>
                <div className="text-center mt-4 mb-6">
                  <span className="material-symbols-outlined text-5xl text-green-600 mb-3 block">deployed_code</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Implementation</h3>
                  <p className="text-sm text-green-600 font-semibold mb-4">8-12 weeks</p>
                </div>

                <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
                  <p className="text-xs font-bold text-green-900 mb-1">What happens:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Production system architecture</li>
                    <li>• Full integration with your stack</li>
                    <li>• QA validation test sets</li>
                    <li>• Staff training + documentation</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-grow">
                  <p className="text-xs font-bold text-green-900 mb-1">Best for:</p>
                  <p className="text-xs text-slate-700">
                    Production use with comprehensive QA, training, and ongoing support
                  </p>
                </div>

                <button
                  onClick={() => onOpenModal('consultation')}
                  className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md mt-6"
                >
                  Discuss Implementation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Scarcity Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 bg-slate-50 inline-block px-6 py-3 rounded-lg border border-slate-200">
            <span className="material-symbols-outlined text-amber-600 text-base align-middle mr-1">info</span>
            Limited pilot slots monthly to maintain reviewer QA quality
          </p>
        </div>
      </div>
    </section>
  );
}
