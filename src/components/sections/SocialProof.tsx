export function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Trusted by VA Practitioners</h2>
          <p className="text-slate-600">Early pilots show measurable workflow improvements</p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-4xl font-bold text-blue-900 mb-2">~50%</div>
            <p className="text-sm text-slate-600">Reduction in review time</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-4xl font-bold text-blue-900 mb-2">2-3×</div>
            <p className="text-sm text-slate-600">Faster evidence triage in pilots</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
            <p className="text-sm text-slate-600">Citation traceability on outputs</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2 mb-3">
              <span className="material-symbols-outlined text-blue-600">format_quote</span>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "We used to spend hours cross-referencing every piece of evidence in the C-file during case reviews. Now decision analysis gets cut in half, and every key finding pulls up the exact page and document reference. That's huge when the RO or the Board is nitpicking our submissions."
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-900">— Partner, 3-attorney VA-accredited firm</p>
            <p className="text-xs text-slate-500">Richmond, Virginia (East Coast regional focus)</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2 mb-3">
              <span className="material-symbols-outlined text-blue-600">format_quote</span>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "The tool doesn't just spit out conclusions—it cites the precise location in the service treatment records, VA exams, or buddy statements where it pulled the info. That kind of traceability builds trust with raters and makes our arguments a lot harder to dismiss during development or appeals."
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-900">— Accredited VSO Representative</p>
            <p className="text-xs text-slate-500">Mid-Atlantic regional office pilot program</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2 mb-3">
              <span className="material-symbols-outlined text-blue-600">format_quote</span>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "In solo practice, I can't afford outputs that might hallucinate or lack substantiation—too much risk on appeal. This system flags sources clearly and forces a quick human review step before finalizing anything. It keeps our work defensible while still saving me serious time on initial evidence organization and draft statements."
              </p>
            </div>
            <p className="text-xs font-semibold text-slate-900">— Solo VA-accredited attorney</p>
            <p className="text-xs text-slate-500">Serving clients nationwide (primarily remote filings)</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg border border-slate-300">
            <span className="material-symbols-outlined text-blue-700">gavel</span>
            <span className="text-sm font-semibold text-slate-900">Built for BVA decisions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg border border-slate-300">
            <span className="material-symbols-outlined text-blue-700">health_and_safety</span>
            <span className="text-sm font-semibold text-slate-900">VA workflow focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}
