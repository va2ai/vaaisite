import { useState } from 'react';

const faqs = [
  {
    question: 'How do you prevent hallucinations?',
    answer: 'Three layers: (1) Citation-first extraction—every statement must link to a source document, (2) Cross-checking agents that verify each other\'s outputs, (3) Mandatory human review before finalization. We don\'t generate unsupported claims.',
  },
  {
    question: 'Are all outputs cited?',
    answer: 'Yes. Every extracted fact includes a reference to the source document with page and paragraph location. Attorneys can verify claims in seconds, not minutes.',
  },
  {
    question: 'Can you handle redacted or PHI-containing documents?',
    answer: 'Yes. We work with redacted BVA decisions and can deploy on-premise or in your secure cloud environment to handle PHI under BAAs. Security and compliance are built-in from day one.',
  },
  {
    question: 'Is this SaaS or consulting?',
    answer: 'Consulting-first. I build custom workflows tailored to your firm\'s specific needs, not one-size-fits-all software. Each engagement includes architecture design, implementation, and staff training. Production systems can be cloud-hosted or on-premise.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Project-based pricing tied to scope and deliverables. Assessment phase is fixed-fee. Prototype sprints and implementation are quoted after assessment. No recurring SaaS fees—you own what we build.',
  },
  {
    question: 'Does this replace attorneys?',
    answer: 'Absolutely not. These systems augment attorney expertise by accelerating evidence review, drafting first-pass analysis, and surfacing relevant case law. Final decisions, strategy, and client communication always require professional judgment. Think of it as a research assistant, not a replacement.',
  },
  {
    question: 'What about confidentiality and NDAs?',
    answer: 'All engagements include NDAs as standard. Your data, workflows, and case strategies remain confidential. We can work with your existing data security and compliance requirements.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 font-serif mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common questions about our AI systems and approach</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <h3 className="font-bold text-slate-900 flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-600">help</span>
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-600 text-sm leading-relaxed px-6 pb-6 ml-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
