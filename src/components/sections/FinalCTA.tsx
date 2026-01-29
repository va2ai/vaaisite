interface FinalCTAProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">Ready to Cut Review Time in Half?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Book a 15-minute workflow audit—no sales pitch, just examples and fit assessment
        </p>
        <button
          onClick={() => onOpenModal('consultation')}
          className="inline-flex items-center bg-white text-blue-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg text-lg"
        >
          <span className="material-symbols-outlined mr-2">calendar_today</span>
          Book Your Workflow Audit
        </button>
        <p className="text-blue-200 text-sm mt-6">
          Or{' '}
          <button
            onClick={() => onOpenModal('assessment')}
            className="underline hover:text-white"
          >
            request a full workflow assessment
          </button>
        </p>
      </div>
    </section>
  );
}
