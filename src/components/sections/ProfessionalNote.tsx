export function ProfessionalNote() {
  return (
    <section className="bg-slate-900 py-12 text-slate-300 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="material-symbols-outlined text-3xl text-blue-400">gavel</span>
          <h3 className="text-xl font-bold text-white font-serif">Built for Legal Professionals</h3>
        </div>
        <p className="text-base text-slate-300 leading-relaxed">
          These AI systems <strong className="text-white">augment your expertise—they don't replace it.</strong>{' '}
          Every output includes verifiable citations, traceable reasoning, and structured formats designed for attorney review. All AI-generated content serves as working drafts, subject to your firm's quality standards and ethical obligations.
        </p>
      </div>
    </section>
  );
}
