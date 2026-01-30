import { useState, useRef, useCallback } from 'react';
import { DocumentViewer } from '../demo/DocumentViewer';
import { AnalysisPanel } from '../demo/AnalysisPanel';

type DemoTab = 'demo-live' | 'demo-difference';

export function Demo() {
  const [activeMainTab, setActiveMainTab] = useState<DemoTab>('demo-live');
  const [activeDocTab, setActiveDocTab] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const docViewerRef = useRef<HTMLDivElement>(null);

  const scrollPositions = [0, 1800, 3600];

  const handleDocTabChange = useCallback((index: number) => {
    setActiveDocTab(index);
    if (docViewerRef.current) {
      docViewerRef.current.scrollTop = scrollPositions[index];
    }
  }, []);

  const runDemo = useCallback(() => {
    setIsScanning(true);

    const tabs = [
      { scroll: 0 },
      { scroll: 800 },
      { scroll: 1600 },
    ];

    let currentTab = 0;

    const tabInterval = setInterval(() => {
      currentTab++;
      if (currentTab < tabs.length) {
        if (docViewerRef.current) {
          docViewerRef.current.scrollTop = tabs[currentTab].scroll;
        }
        setActiveDocTab(currentTab);
      } else {
        clearInterval(tabInterval);
      }
    }, 650);

    setTimeout(() => {
      clearInterval(tabInterval);
      setIsScanning(false);
      setShowResults(true);
      if (docViewerRef.current) {
        docViewerRef.current.scrollTop = 0;
      }
      setActiveDocTab(0);
    }, 2000);
  }, []);

  const resetDemo = useCallback(() => {
    setShowResults(false);
    if (docViewerRef.current) {
      docViewerRef.current.scrollTop = 0;
    }
  }, []);

  const handleHighlight = useCallback((spanId: string, paraId: string) => {
    const para = document.getElementById(paraId);
    if (para) {
      para.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const span = document.getElementById(spanId);
      if (span) {
        span.classList.add('highlight-text', 'highlight-active');
        setTimeout(() => {
          span.classList.remove('highlight-active');
        }, 2000);
      }
    }
  }, []);

  return (
    <section id="demo" className="pt-12 pb-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
            Extraction & System Demo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 font-serif">
            See It In Action
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Explore how the system processes complex legal documents and visualize the underlying architecture.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-slate-200">
          <button
            onClick={() => setActiveMainTab('demo-live')}
            className={`tab-btn px-6 py-4 md:py-3 text-slate-500 hover:text-blue-800 font-medium transition focus:outline-none min-h-[44px] ${
              activeMainTab === 'demo-live' ? 'active' : ''
            }`}
          >
            Live Interface
          </button>
          <button
            onClick={() => setActiveMainTab('demo-difference')}
            className={`tab-btn px-6 py-4 md:py-3 text-slate-500 hover:text-blue-800 font-medium transition focus:outline-none min-h-[44px] ${
              activeMainTab === 'demo-difference' ? 'active' : ''
            }`}
          >
            Before & After
          </button>
        </div>

        {/* Tab Content: Live Interface */}
        <div className={`tab-content ${activeMainTab === 'demo-live' ? 'active' : ''}`}>
          <div className="bg-slate-100 rounded-xl shadow-inner border border-slate-300 overflow-hidden flex flex-col lg:flex-row h-[85vh] lg:h-[600px]">
            <DocumentViewer
              ref={docViewerRef}
              activeTab={activeDocTab}
              onTabChange={handleDocTabChange}
              isScanning={isScanning}
            />
            <AnalysisPanel
              isInitial={!showResults}
              onRunDemo={runDemo}
              onResetDemo={resetDemo}
              onHighlight={handleHighlight}
            />
          </div>
        </div>

        {/* Tab Content: Before & After */}
        <div className={`tab-content ${activeMainTab === 'demo-difference' ? 'active' : ''}`}>
          <BeforeAfterContent />
        </div>
      </div>
    </section>
  );
}

function BeforeAfterContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Before */}
        <div className="bg-slate-50 rounded-xl border-2 border-slate-300 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-red-500">close</span>
            <h3 className="font-bold text-slate-900">Before: Manual Review</h3>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-600 font-mono leading-relaxed h-64 overflow-y-auto">
            <p className="mb-2">
              [...] The Veteran's OSA is shown to be causally related to their active service via a medical nexus opinion that links the condition to in-service weight gain secondary to a service-connected knee injury. A private medical opinion from Dr. Smith, dated October 12, 2022, was submitted. Dr. Smith opined that it is "at least as likely as not" that the Veteran's OSA is aggravated by obesity. The doctor further explained that the Veteran's service-connected knee condition prevents cardiovascular exercise, leading to a BMI increase from 24 to 32 since discharge. The VA examiner, in a June 2023 addendum, conceded that the medical literature supports a link between obesity and OSA, and did not offer a contrary etiology [...]
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-4">Manual extraction takes 15-30 minutes per decision</p>
        </div>

        {/* After */}
        <div className="bg-blue-50 rounded-xl border-2 border-blue-500 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-green-500">check_circle</span>
            <h3 className="font-bold text-slate-900">After: AI Extraction</h3>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200 h-64 overflow-y-auto space-y-3">
            <div className="text-sm">
              <div className="flex items-start gap-2 mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">GRANTED</span>
                <strong className="text-slate-900">Sleep Apnea</strong>
              </div>
              <p className="text-slate-600 text-xs mb-2">Secondary service connection (obesity intermediate)</p>
              <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 flex items-start gap-1">
                <span className="material-symbols-outlined text-sm">link</span>
                <span>Source: "Board finds that sleep apnea is proximately due..." (pg. 4, ¶3)</span>
              </div>
            </div>
            <div className="text-sm border-t border-slate-200 pt-3">
              <strong className="text-slate-900">Key Evidence:</strong>
              <ul className="text-xs text-slate-600 mt-2 space-y-1 ml-4">
                <li>• Private opinion: Dr. Smith (Oct 2022) - nexus link</li>
                <li>• VA examiner concession (June 2023 addendum)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-green-700 font-semibold mt-4">Automated extraction in under 60 seconds</p>
        </div>
      </div>

      {/* Takeaways */}
      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
        <h4 className="font-bold text-slate-900 mb-4 text-center">Why This Works</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 text-2xl">link</span>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Every claim tied to source</p>
              <p className="text-xs text-slate-600">Direct citations with page + paragraph references</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 text-2xl">fact_check</span>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Human verification step</p>
              <p className="text-xs text-slate-600">Attorney review before finalization</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 text-2xl">download</span>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Export-ready formats</p>
              <p className="text-xs text-slate-600">Memo, brief, JSON for case management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
