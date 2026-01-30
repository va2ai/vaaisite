import { useState } from 'react';

export function Capabilities() {
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

  const capabilities = [
    {
      id: 1,
      title: 'Evidence Intelligence',
      icon: 'search_insights',
      color: 'blue',
      items: [
        'Multi-doc extraction across C-files and decisions',
        'Source linking with page + paragraph references',
        'Decision reasoning capture for appeal strategy',
        'Medical record timeline extraction'
      ]
    },
    {
      id: 2,
      title: 'Workflow Design',
      icon: 'account_tree',
      color: 'amber',
      items: [
        'Review checkpoints at critical decision points',
        'Agent orchestration for multi-step analysis',
        'Custom outputs (memos, briefs, case summaries)',
        'Integration with existing case management'
      ]
    },
    {
      id: 3,
      title: 'Defensible AI',
      icon: 'verified_user',
      color: 'green',
      items: [
        'Traceability: every claim traces to source',
        'Explainability: clear reasoning chains',
        'Audit-ready logs of all AI decisions',
        'Staff training on verification protocols'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-100',
        icon: 'text-blue-700',
        check: 'text-blue-600'
      },
      amber: {
        border: 'border-amber-200',
        bg: 'bg-amber-100',
        icon: 'text-amber-700',
        check: 'text-amber-600'
      },
      green: {
        border: 'border-green-200',
        bg: 'bg-green-100',
        icon: 'text-green-700',
        check: 'text-green-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const toggleCapability = (id: number) => {
    setExpandedCapability(expandedCapability === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Core Capabilities</h2>
          <p className="mt-4 text-slate-600">Three pillars of defensible AI for VA claims work</p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-4">
          {capabilities.map((capability) => {
            const colors = getColorClasses(capability.color);
            const isExpanded = expandedCapability === capability.id;

            return (
              <div key={capability.id} className="bg-white rounded-2xl shadow-lg border-2 overflow-hidden">
                <button
                  onClick={() => toggleCapability(capability.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-2xl ${colors.icon}`}>{capability.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{capability.title}</h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
                    expand_more
                  </span>
                </button>

                <div
                  className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <ul className="px-6 pb-6 space-y-3 text-slate-700">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`material-symbols-outlined ${colors.check} text-xl mt-0.5`}>check_circle</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {capabilities.map((capability) => {
            const colors = getColorClasses(capability.color);

            return (
              <div key={capability.id} className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition duration-300`}>
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center ${colors.icon} mb-6 mx-auto`}>
                  <span className="material-symbols-outlined text-4xl">{capability.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{capability.title}</h3>
                <ul className="space-y-3 text-slate-700">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`material-symbols-outlined ${colors.check} text-xl mt-0.5`}>check_circle</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
