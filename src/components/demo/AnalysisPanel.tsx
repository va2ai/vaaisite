interface AnalysisPanelProps {
  isInitial: boolean;
  onRunDemo: () => void;
  onResetDemo: () => void;
  onHighlight: (spanId: string, paraId: string) => void;
}

export function AnalysisPanel({ isInitial, onRunDemo, onResetDemo, onHighlight }: AnalysisPanelProps) {
  return (
    <div className="w-full lg:w-2/5 bg-slate-50 flex flex-col border-l border-slate-200">
      <div className="h-12 bg-white border-b border-slate-200 flex items-center px-4 justify-between shadow-sm z-10">
        <span className="text-xs font-semibold text-blue-900 uppercase flex items-center">
          <span className="material-symbols-outlined text-base mr-1">smart_toy</span>
          AI Extraction Layer
        </span>
        <span className="text-[10px] text-slate-400">v2.4.1 (RAG-Verified)</span>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {isInitial ? (
          <InitialState onRunDemo={onRunDemo} />
        ) : (
          <ResultsState onResetDemo={onResetDemo} onHighlight={onHighlight} />
        )}
      </div>
    </div>
  );
}

function InitialState({ onRunDemo }: { onRunDemo: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="bg-blue-100 p-4 rounded-full mb-4">
        <span className="material-symbols-outlined text-blue-600 text-4xl">document_scanner</span>
      </div>
      <h3 className="text-slate-900 font-medium mb-2">Ready to Analyze</h3>
      <p className="text-slate-500 text-sm mb-6">
        Click below to run the extraction model on the sample decision.
      </p>
      <button
        onClick={onRunDemo}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition flex items-center"
      >
        <span className="material-symbols-outlined mr-2">play_arrow</span>
        Run Analysis
      </button>
    </div>
  );
}

function ResultsState({
  onResetDemo,
  onHighlight,
}: {
  onResetDemo: () => void;
  onHighlight: (spanId: string, paraId: string) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Analysis Summary Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center">
            <span className="material-symbols-outlined text-blue-600 text-lg mr-2">analytics</span>
            Analysis Complete
          </h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">VERIFIED</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white rounded p-2">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Documents</div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Key Facts</div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-[10px] text-slate-600 uppercase tracking-wide">Cross-Refs</div>
          </div>
        </div>
      </div>

      {/* Download Report Buttons */}
      <div className="space-y-3">
        <a
          href="https://r2.vaclaims.net/file/site/VA_Claim_Analysis_Report_Premium.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-sm py-4 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 animate-pulse hover:animate-none"
        >
          <span className="material-symbols-outlined text-xl">description</span>
          <span>Download Complete Analysis Report (PDF)</span>
          <span className="material-symbols-outlined text-xl">download</span>
        </a>
        <a
          href="https://r2.vaclaims.net/file/site/VA_Claims_AI_Research_Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm py-4 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-xl">science</span>
          <span>Download AI Research Report (PDF)</span>
          <span className="material-symbols-outlined text-xl">download</span>
        </a>
      </div>

      {/* Primary Issue Card */}
      <div
        className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition cursor-pointer group"
        onClick={() => onHighlight('citation-3', 'para-sa-4')}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-slate-800 text-sm flex items-center">
            <span className="material-symbols-outlined text-blue-600 text-base mr-1.5">assignment</span>
            Primary Issue: Psychiatric Disability
          </h4>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">REMANDED</span>
        </div>
        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
          Service connection claim for acquired psychiatric disorder (bipolar, depression, anxiety) remanded for additional medical examination.
        </p>

        <div className="bg-slate-50 rounded p-2 mb-3">
          <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Confidence Scores</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-700">Issue Identification:</span>
            <div className="flex-1 bg-slate-200 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '98%' }} />
            </div>
            <span className="text-green-600 font-medium">98%</span>
          </div>
          <div className="flex items-center gap-2 text-xs mt-1">
            <span className="text-slate-700">Citation Accuracy:</span>
            <div className="flex-1 bg-slate-200 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '95%' }} />
            </div>
            <span className="text-green-600 font-medium">95%</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-start text-xs text-blue-600 font-medium bg-blue-50 p-2 rounded group-hover:bg-blue-100 transition">
            <span className="material-symbols-outlined text-sm mr-1 mt-0.5">gavel</span>
            <div>
              <span className="font-semibold">BVA Decision</span>
              <span className="text-blue-500"> • March 14, 2024:</span>
              <span className="text-slate-600"> "March 2019 VA opinion inadequate... examiner did not discuss November 2012 VA letter"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service History Analysis */}
      <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500 shadow-sm hover:shadow-md transition">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-slate-800 text-sm flex items-center">
            <span className="material-symbols-outlined text-amber-600 text-base mr-1.5">history</span>
            Service Timeline Analysis
          </h4>
          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-medium">ADT PERIOD</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <span className="text-amber-600 font-mono">1972-04</span>
            <span className="text-slate-600">→ Active Duty for Training begins (Basic + MOS)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-600 font-mono">1972-09</span>
            <span className="text-slate-600">→ ADT period ends, National Guard service</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-600 font-mono">1973-11</span>
            <span className="text-slate-600">→ First psychiatric evaluation documented</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-slate-400 font-mono">1974-03</span>
            <span className="text-slate-600">→ Medical discharge (drug abuse, personality disorder)</span>
          </div>
        </div>
      </div>

      {/* Medical Evidence Summary */}
      <div
        className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md transition cursor-pointer group"
        onClick={() => onHighlight('citation-1', 'para-sa-2')}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-slate-800 text-sm flex items-center">
            <span className="material-symbols-outlined text-purple-600 text-base mr-1.5">medical_information</span>
            Medical Evidence Chain
          </h4>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">8 RECORDS</span>
        </div>
        <p className="text-xs text-slate-600 mb-3">Cross-referenced medical opinions spanning multiple decades</p>
        <div className="space-y-1.5">
          <div className="flex items-start text-xs text-purple-600 font-medium bg-purple-50 p-2 rounded group-hover:bg-purple-100 transition">
            <span className="material-symbols-outlined text-sm mr-1 mt-0.5">medical_services</span>
            <div>
              <span className="font-semibold">C&P Exam</span>
              <span className="text-purple-500"> • Mar 2019:</span>
              <span className="text-slate-600"> "Bipolar disorder (F31.9), occupational/social impairment with deficiencies in most areas"</span>
            </div>
          </div>
          <div className="flex items-start text-xs text-purple-600 font-medium bg-purple-50 p-2 rounded group-hover:bg-purple-100 transition">
            <span className="material-symbols-outlined text-sm mr-1 mt-0.5">history_edu</span>
            <div>
              <span className="font-semibold">VA Psychiatrist</span>
              <span className="text-purple-500"> • Nov 2012:</span>
              <span className="text-slate-600"> "First manifested by drug abuse and personality problems while on active duty"</span>
            </div>
          </div>
          <div className="flex items-start text-xs text-purple-600 font-medium bg-purple-50 p-2 rounded group-hover:bg-purple-100 transition">
            <span className="material-symbols-outlined text-sm mr-1 mt-0.5">psychology</span>
            <div>
              <span className="font-semibold">Service Records</span>
              <span className="text-purple-500"> • Nov 1973:</span>
              <span className="text-slate-600"> "History of drug abuse since basic training 1972, MMPI administered"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Compliance Check */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <h4 className="font-bold text-green-800 text-xs mb-2 flex items-center">
          <span className="material-symbols-outlined text-sm mr-1">verified</span>
          Regulatory Compliance
        </h4>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="text-green-600">✓</span>
            <span className="text-slate-700">38 U.S.C. § 5103A cited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-green-600">✓</span>
            <span className="text-slate-700">38 C.F.R. § 20.302 cited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-green-600">✓</span>
            <span className="text-slate-700">Case law: Nieves-Rodriguez</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-green-600">✓</span>
            <span className="text-slate-700">DSM-5 criteria verified</span>
          </div>
        </div>
      </div>

      {/* Processing Statistics */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
        <p className="text-xs text-slate-600 font-medium mb-2 flex items-center">
          <span className="material-symbols-outlined text-sm mr-1">query_stats</span>
          Processing Statistics
        </p>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
          <div>• <span className="font-medium">Documents:</span> 3 analyzed</div>
          <div>• <span className="font-medium">Pages:</span> 47 total</div>
          <div>• <span className="font-medium">Citations:</span> 8 extracted</div>
          <div>• <span className="font-medium">Cross-refs:</span> 12 verified</div>
          <div>• <span className="font-medium">Time period:</span> 1972-2024</div>
          <div>• <span className="font-medium">Avg confidence:</span> 96.5%</div>
        </div>
      </div>

      <button
        onClick={onResetDemo}
        className="w-full text-center text-xs text-slate-400 hover:text-slate-600 mt-4 underline flex items-center justify-center gap-1"
      >
        <span className="material-symbols-outlined text-sm">refresh</span>
        Reset Analysis
      </button>
    </div>
  );
}
