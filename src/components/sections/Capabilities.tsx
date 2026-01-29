export function Capabilities() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Core Capabilities</h2>
          <p className="mt-4 text-slate-600">Three pillars of defensible AI for VA claims work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1: Evidence Intelligence */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl">search_insights</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Evidence Intelligence</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Multi-doc extraction across C-files and decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Source linking with page + paragraph references</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Decision reasoning capture for appeal strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Medical record timeline extraction</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Workflow Design */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-200 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl">account_tree</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Workflow Design</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Review checkpoints at critical decision points</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Agent orchestration for multi-step analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Custom outputs (memos, briefs, case summaries)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Integration with existing case management</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Defensible AI */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Defensible AI</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Traceability: every claim traces to source</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Explainability: clear reasoning chains</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Audit-ready logs of all AI decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-600 text-xl mt-0.5">check_circle</span>
                <span className="text-sm">Staff training on verification protocols</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
