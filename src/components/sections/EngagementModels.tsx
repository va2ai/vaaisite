interface EngagementModelsProps {
  onOpenModal: (type: 'consultation' | 'assessment') => void;
}

export function EngagementModels({ onOpenModal }: EngagementModelsProps) {
  const phases = [
    {
      number: 1,
      color: 'blue',
      icon: 'assessment',
      title: 'Workflow Assessment',
      duration: '1-2 weeks',
      whatHappens: [
        'Workflow mapping session',
        'Risk assessment review',
        'ROI opportunity analysis',
        'Phased implementation roadmap'
      ],
      bestFor: 'Teams exploring AI safely and want clear understanding of risks + benefits before committing',
      buttonText: 'Request Assessment',
      modalType: 'assessment' as const
    },
    {
      number: 2,
      color: 'amber',
      icon: 'rocket_launch',
      title: 'Prototype Sprint',
      duration: '2-4 weeks',
      whatHappens: [
        'Build one high-impact workflow',
        'Rapid development iteration',
        'Working demo with your data',
        'Performance metrics captured'
      ],
      bestFor: 'Validating one workflow fast with measurable results before broader rollout',
      buttonText: 'Discuss Sprint',
      modalType: 'consultation' as const
    },
    {
      number: 3,
      color: 'green',
      icon: 'deployed_code',
      title: 'Implementation',
      duration: '8-12 weeks',
      whatHappens: [
        'Production system architecture',
        'Full integration with your stack',
        'QA validation test sets',
        'Staff training + documentation'
      ],
      bestFor: 'Production use with comprehensive QA, training, and ongoing support',
      buttonText: 'Discuss Implementation',
      modalType: 'consultation' as const
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: 'border-blue-500',
        badge: 'bg-blue-600',
        icon: 'text-blue-600',
        bg: 'bg-blue-50 border-blue-200',
        text: 'text-blue-900',
        textAlt: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      amber: {
        border: 'border-amber-500',
        badge: 'bg-amber-600',
        icon: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-200',
        text: 'text-amber-900',
        textAlt: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700'
      },
      green: {
        border: 'border-green-500',
        badge: 'bg-green-600',
        icon: 'text-green-600',
        bg: 'bg-green-50 border-green-200',
        text: 'text-green-900',
        textAlt: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="engagement" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center font-serif mb-6">Engagement Models</h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Flexible engagement options from quick assessments to full production implementation
        </p>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop only */}
          <div
            className="hidden md:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-green-600"
            style={{ top: '80px' }}
          />

          {/* Mobile: Horizontal Scroll with Peek */}
          <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4">
              {phases.map((phase) => {
                const colors = getColorClasses(phase.color);
                return (
                  <div key={phase.number} className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center">
                    <div className={`bg-white border-2 ${colors.border} rounded-2xl p-6 shadow-lg h-full flex flex-col`}>
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badge} text-white px-4 py-1 rounded-full text-xs font-bold uppercase`}>
                        Phase {phase.number}
                      </div>
                      <div className="text-center mt-4 mb-6">
                        <span className={`material-symbols-outlined text-5xl ${colors.icon} mb-3 block`}>{phase.icon}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                        <p className={`text-sm ${colors.textAlt} font-semibold mb-4`}>{phase.duration}</p>
                      </div>

                      <div className={`${colors.bg} rounded-lg p-3 mb-4 border`}>
                        <p className={`text-xs font-bold ${colors.text} mb-1`}>What happens:</p>
                        <ul className="text-xs text-slate-700 space-y-1">
                          {phase.whatHappens.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-grow">
                        <p className="text-xs font-bold text-green-900 mb-1">Best for:</p>
                        <p className="text-xs text-slate-700">{phase.bestFor}</p>
                      </div>

                      <button
                        onClick={() => onOpenModal(phase.modalType)}
                        className={`w-full py-3 ${colors.button} text-white font-semibold rounded-lg transition shadow-md mt-6`}
                      >
                        {phase.buttonText}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
            {phases.map((phase) => {
              const colors = getColorClasses(phase.color);
              return (
                <div key={phase.number} className="relative h-full">
                  <div className={`bg-white border-2 ${colors.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col`}>
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badge} text-white px-4 py-1 rounded-full text-xs font-bold uppercase`}>
                      Phase {phase.number}
                    </div>
                    <div className="text-center mt-4 mb-6">
                      <span className={`material-symbols-outlined text-5xl ${colors.icon} mb-3 block`}>{phase.icon}</span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                      <p className={`text-sm ${colors.textAlt} font-semibold mb-4`}>{phase.duration}</p>
                    </div>

                    <div className={`${colors.bg} rounded-lg p-3 mb-4 border`}>
                      <p className={`text-xs font-bold ${colors.text} mb-1`}>What happens:</p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        {phase.whatHappens.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 border border-green-200 flex-grow">
                      <p className="text-xs font-bold text-green-900 mb-1">Best for:</p>
                      <p className="text-xs text-slate-700">{phase.bestFor}</p>
                    </div>

                    <button
                      onClick={() => onOpenModal(phase.modalType)}
                      className={`w-full py-3 ${colors.button} text-white font-semibold rounded-lg transition shadow-md mt-6`}
                    >
                      {phase.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
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
