export function RecruiterSection() {
  return (
    <section className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-indigo-900 text-indigo-200 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
              For Engineering Teams
            </div>
            <p className="mb-6 leading-relaxed">
              Hiring for production AI/ML engineering roles? My approach to deploying LLMs in high-stakes environments: reliable architecture, rigorous validation, and operational controls from day one.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-indigo-400 mr-3">psychology</span>
                <div>
                  <strong className="text-white">LLM Systems Design:</strong> Production RAG architectures, structured extraction pipelines, and model evaluation frameworks.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-indigo-400 mr-3">verified_user</span>
                <div>
                  <strong className="text-white">Production Rigor:</strong> Comprehensive observability, quality assurance workflows, and quantifiable performance metrics.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-indigo-400 mr-3">account_tree</span>
                <div>
                  <strong className="text-white">Systems Thinking:</strong> Transforming complex, unstructured processes into reliable, scalable automation.
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0 relative">
            <img
              src="https://r2.vaclaims.net/file/site/siteimg.png"
              className="rounded-xl shadow-2xl border border-slate-700 opacity-80 hover:opacity-100 transition duration-500"
              alt="System Architecture Diagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
