export function WhyDefensible() {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white font-serif mb-6">Why This Doesn't Hallucinate</h2>
        <p className="text-blue-100 mb-10 text-lg">Three-layer verification ensures accuracy</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
            <span className="material-symbols-outlined text-4xl text-blue-300 mb-4 block">link</span>
            <h3 className="font-bold text-white mb-2">Citation-first extraction</h3>
            <p className="text-sm text-blue-200">Every statement must link to a source document location</p>
          </div>
          <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
            <span className="material-symbols-outlined text-4xl text-blue-300 mb-4 block">group_work</span>
            <h3 className="font-bold text-white mb-2">Cross-checking agents</h3>
            <p className="text-sm text-blue-200">Multiple AI models verify each other's outputs</p>
          </div>
          <div className="bg-blue-800/50 backdrop-blur p-6 rounded-xl border border-blue-700">
            <span className="material-symbols-outlined text-4xl text-blue-300 mb-4 block">person_check</span>
            <h3 className="font-bold text-white mb-2">Human-in-the-loop approval</h3>
            <p className="text-sm text-blue-200">Attorney reviews and approves before finalization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
