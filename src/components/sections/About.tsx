interface AboutProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function About({ onOpenModal }: AboutProps) {
  return (
    <>
      {/* Main About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 z-0 opacity-30" />
                <img
                  src="https://r2.vaclaims.net/file/site/me.png"
                  alt="Christopher Combs - Founder"
                  className="relative z-10 w-48 h-48 object-cover rounded-2xl shadow-2xl border-2 border-blue-400"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-3/4 text-center md:text-left">
              <div className="inline-block bg-blue-800 text-blue-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                Built by an Expert
              </div>
              <h3 className="text-3xl font-bold text-white font-serif mb-2">Christopher Combs</h3>
              <p className="text-blue-200 font-medium mb-6">Founder • AI Engineer • VA Legal Tech Specialist</p>

              <div className="text-slate-300 leading-relaxed space-y-3">
                <p className="text-base">
                  Specialized in high-stakes AI for veterans' benefits law. I build systems where mistakes matter—deploying models only when they can be grounded, cited, and verified.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-700">
                    VA Domain Focus
                  </span>
                  <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-700">
                    Production AI Systems
                  </span>
                  <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg text-sm border border-blue-700">
                    Legal Tech Experience
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal('consultation')}
                className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg group"
              >
                Schedule a Call
                <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Why Work With Me</h3>
            <div className="prose prose-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                I've spent years building AI systems in environments where accuracy isn't optional. My background combines software engineering, machine learning operations, and a deep understanding of the VA claims process.
              </p>
              <p>
                Unlike generalist AI consultants, I specialize exclusively in veterans' benefits work. I understand M21-1, 38 CFR, BVA decision structure, and the nuances of secondary service connection arguments. This domain expertise means I can design systems that actually fit your workflow.
              </p>
              <p>
                My philosophy: <strong>Deploy AI only where it can be verified.</strong> No black boxes, no "trust the model" answers. Every output includes provenance, every claim traces to a source, and human review is always part of the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
