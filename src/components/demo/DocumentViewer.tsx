import { forwardRef } from 'react';

interface DocumentViewerProps {
  activeTab: number;
  onTabChange: (index: number) => void;
  isScanning: boolean;
}

export const DocumentViewer = forwardRef<HTMLDivElement, DocumentViewerProps>(
  function DocumentViewer({ activeTab, onTabChange, isScanning }, ref) {
    const tabClasses = (index: number) =>
      index === activeTab
        ? 'px-3 py-2.5 md:py-1.5 bg-white border border-slate-300 rounded-t text-xs font-semibold text-slate-900 flex items-center gap-1 cursor-pointer hover:bg-slate-100 transition min-h-[44px] md:min-h-0'
        : 'px-3 py-2.5 md:py-1.5 bg-slate-50 border border-slate-200 rounded-t text-xs text-slate-600 flex items-center gap-1 cursor-pointer hover:bg-slate-100 transition min-h-[44px] md:min-h-0';

    return (
      <div className="w-full lg:w-3/5 h-1/2 lg:h-full bg-white border-r border-slate-200 flex flex-col relative">
        <div className="bg-slate-100 border-b border-slate-200">
          <div className="h-12 flex items-center px-4 justify-between border-b border-slate-300">
            <span className="text-xs font-semibold text-slate-500 uppercase flex items-center">
              <span className="material-symbols-outlined text-base mr-1">folder_open</span>
              Case File: Veteran 12-34567
            </span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Document Tabs */}
          <div className="flex gap-1 px-2 py-2">
            <div className={tabClasses(0)} onClick={() => onTabChange(0)}>
              <span className="material-symbols-outlined text-sm">gavel</span>
              BVA Decision
            </div>
            <div className={tabClasses(1)} onClick={() => onTabChange(1)}>
              <span className="material-symbols-outlined text-sm">description</span>
              RDS (Rating)
            </div>
            <div className={tabClasses(2)} onClick={() => onTabChange(2)}>
              <span className="material-symbols-outlined text-sm">medical_services</span>
              CP Exam
            </div>
          </div>
        </div>

        {/* Scanner Line */}
        {isScanning && <div className="scanner-line z-20" />}

        {/* Scrollable Text */}
        <div
          ref={ref}
          className="flex-1 overflow-y-auto p-8 pdf-scroll relative text-slate-800 text-sm leading-relaxed font-serif"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            {/* BVA Decision Document */}
            <BVADocument />

            {/* Divider */}
            <div className="border-t-2 border-dashed border-slate-300 pt-8" />

            {/* RDS Document */}
            <RDSDocument />

            {/* Divider */}
            <div className="border-t-2 border-dashed border-slate-300 pt-8" />

            {/* CP Exam Document */}
            <CPExamDocument />
          </div>
        </div>
      </div>
    );
  }
);

function BVADocument() {
  return (
    <div>
      <p className="text-center font-bold mb-6 text-slate-500 text-xs">
        BOARD OF VETERANS' APPEALS<br />
        For the Secretary of Veterans Affairs<br />
        Washington, DC 20038
      </p>

      <h3 className="font-bold text-lg mb-4 text-center">
        IN THE APPEAL OF<br />
        [SPOUSE NAME]<br />
        IN THE CASE OF [VETERAN NAME]
      </h3>

      <p className="mb-4 text-xs">
        SS XXX XX XXXX<br />
        Docket No. XX-XXXXX<br />
        DATE: March 14, 2024
      </p>

      <p className="mb-4 text-center font-bold text-lg">REMANDED</p>

      <p className="mb-6">
        Entitlement to service connection for an acquired psychiatric disability, to include bipolar disorder, major depression, and anxiety disorder, is remanded.
      </p>

      <p className="mb-4 font-bold">REASONS FOR REMAND</p>

      <p className="mb-4 text-sm">
        The decedent served on active duty for training (ADT) from April to September 1972, with additional service in the Air National Guard thereafter. The decedent passed away in February 2021. As of June 2021, substitution in this matter has been granted and the appellant has been substituted by reason of being the decedent's surviving spouse.
      </p>

      <p className="mb-4 text-sm">
        This matter comes before the Board of Veterans' Appeals (Board) on appeal from a July 2020 rating decision by the Department of Veterans Affairs (VA) Regional Office (RO). The matter was previously before the Board in June 2020, at which time the Board remanded it for further developments.
      </p>

      <p className="mb-4 font-bold text-sm">SERVICE HISTORY AND VETERAN STATUS</p>

      <p className="mb-4 text-sm bg-slate-50 p-3 rounded">
        The decedent served in the Air National Guard, with a 6-years enlistment contract starting in March 1972. However, in March 1974, he was medically discharged due to drug abuse and personality disorder.{' '}
        <span className="bg-yellow-200">
          As the decedent did not have a period of active military, naval or air service and was not awarded service connection for any disabilities, he is not considered a veteran for the purposes of VA disability compensation.
        </span>{' '}
        38 U.S.C. § 101(2).
      </p>

      <p className="mb-4 text-sm">
        Periods of ADT are only considered active service if an individual is disabled due to disease or injury incurred during ADT. 38 U.S.C. § 101(24)(B), (C). The issue before the Board is whether the decedent's acquired psychiatric disorder started during ADT, from April to September 1972, or afterwards.
      </p>

      <p className="mb-4 font-bold text-sm">MEDICAL EVIDENCE</p>

      <p className="mb-4 text-sm" id="para-sa-1">
        The decedent's service treatment records show that his March 1972 entrance examination was unremarkable for mental health problems. However,{' '}
        <span className="bg-yellow-200" id="citation-1">
          in November 1973, the decedent received a psychiatric evaluation, and the report states: "[decedent] has a history of drug abuse, marijuana, LSD, and barbiturates since basic training in 1972."
        </span>
      </p>

      <p className="mb-4 text-sm" id="para-sa-2">
        A December 1973 mental health evaluation report indicates that the decedent was administered the Minnesota Multiphasic Personality Inventory (MMPI) on November 19, 1973, which reported:{' '}
        <span className="bg-yellow-200">
          "He described his mother as an extremely nervous individual who has had 2/3 nervous breakdown requiring hospitalization. His history is strewn with immature and inadequate attempts to manipulate the environment."
        </span>{' '}
        A diagnosis of inadequate personality followed.
      </p>

      <p className="mb-4 text-sm" id="para-sa-3">
        <span id="citation-2">
          In November 2012, a VA psychiatrist provided a letter opining that the decedent's psychiatric disability first manifested by symptoms of drug abuse and personality problems while on active duty.
        </span>
      </p>

      <p className="mb-4 text-sm">
        In April 2010, the appellant submitted a statement reporting that after decedent returned from bootcamp he was fine and identifying the onset of the decedent's mental health problems when he started to train as mechanic at the motor pool under the command of a senior NCO. Specifically, she stated that the NCO would constantly harass the decedent and be verbally abusive towards him, threatening him on a daily basis.
      </p>

      <p className="mb-4 font-bold text-sm">VA EXAMINATION ANALYSIS</p>

      <p className="mb-4 text-sm">
        The decedent was afforded a VA examination in March 2019. At that time, the appellant met the DSM-5 criteria for a diagnosis of bipolar disorder. The VA examiner ultimately opined that, while it was very difficult to identify a precise onset for the decedent's mental disability,{' '}
        <span className="bg-yellow-200">
          the evidence more persuasively showed that the appellant's mental disability started after basic training and was therefore not related to his ADT.
        </span>
      </p>

      <p className="mb-4 text-sm" id="para-sa-4">
        <span id="citation-3">
          The Board finds that the March 2019 VA opinion is inadequate. First, the decedent's DD 214, box 25, reveals that as part of ADT service, the decedent completed basic training as well as MOS training, to include apprenticeship as general vehicle repairman. The March 2019 VA examiner did not discuss the November 2012 VA letter, or other positive evidence, and it is therefore inadequate.
        </span>{' '}
        See Nieves-Rodriguez v. Peake, 22 Vet. App. 295, 304 (2008).
      </p>

      <p className="mb-4 text-sm">
        Accordingly, a remand is necessary to obtain an addendum opinion and correct a pre-decisional duty to assist error. 38 U.S.C. § 5103A; 38 C.F.R. §§ 20.302, 20.802.
      </p>

      <p className="mb-4 font-bold text-sm">ORDER</p>
      <p className="mb-4 text-sm bg-blue-50 p-3 rounded" id="para-order">
        The matter is REMANDED for the following action:<br /><br />
        1. Obtain an addendum opinion on whether the decedent acquired a psychiatric disability started sometime between April 1972 and September 1972, during which time the decedent completed basic training and mechanic school training.<br /><br />
        2. The VA examiner should address whether the decedent had a depressive disorder and attention deficit hyperactivity disorder in addition to bipolar disorder.<br /><br />
        3. In addressing these matters, the VA examiner should discuss the prior VA psychiatric opinions dated November 2012 and March 2017.
      </p>

      <p className="mt-6 text-xs">
        [JUDGE NAME]<br />
        Veterans Law Judge<br />
        Board of Veterans' Appeals<br /><br />
        Attorney for the Board: [ATTORNEY NAME], Associate Counsel
      </p>
    </div>
  );
}

function RDSDocument() {
  return (
    <div>
      <p className="text-center font-bold mb-6 text-slate-500 text-xs">
        DEPARTMENT OF VETERANS AFFAIRS<br />
        Regional Office<br />
        Rating Decision Sheet
      </p>

      <h3 className="font-bold text-lg mb-4 text-center">RATING DECISION</h3>

      <p className="mb-4">
        VETERAN: [REDACTED] &nbsp;&nbsp;&nbsp;&nbsp; File Number: XXX-XX-XXXX<br />
        DATE: July 15, 2020
      </p>

      <p className="mb-4 font-bold">ISSUE DECIDED</p>

      <div className="mb-6 bg-red-50 p-4 rounded border border-red-200" id="rds-psych">
        <p className="font-bold mb-2">Service Connection for Acquired Psychiatric Disorder</p>
        <p className="mb-2">
          <span id="rds-citation-1" className="bg-yellow-200">
            Service connection is DENIED for acquired psychiatric disorder, claimed as bipolar disorder, major depression, and anxiety disorder.
          </span>
        </p>
        <p className="text-xs text-slate-600 mt-3 mb-2">
          <span className="font-semibold">REASONS:</span> The evidence does not establish that the Veteran's psychiatric condition manifested during or was incurred during the period of active duty for training (ADT) from April to September 1972.
        </p>
        <p className="text-xs text-slate-600 mb-2">
          The March 2019 VA examination opinion indicates that the Veteran's mental disorder more likely first manifested after basic training, during National Guard service (post-September 1972). The first documented psychiatric evaluation occurred in November 1973, which is after the ADT period ended.
        </p>
        <p className="text-xs text-slate-600">
          While the Veteran contends that his psychiatric problems began during basic training due to harassment and verbal abuse, the medical evidence does not support onset during the ADT period as required by 38 U.S.C. § 101(24)(B).
        </p>
      </div>

      <p className="mb-4 font-bold">EVIDENCE CONSIDERED</p>
      <div className="text-sm text-slate-700 space-y-1">
        <p>• Service Treatment Records (April-September 1972)</p>
        <p>• National Guard Records (1972-1974)</p>
        <p>• VA Compensation & Pension Examination (March 13, 2019)</p>
        <p>• VA Psychiatric Treatment Records (2002-2020)</p>
        <p>• Spouse Statement (April 2010)</p>
        <p>• November 1973 Psychiatric Evaluation Report</p>
        <p>• November 2012 VA Psychiatrist Letter</p>
      </div>

      <p className="mb-4 mt-4 font-bold">REGULATIONS APPLIED</p>
      <div className="text-xs text-slate-600">
        <p>38 U.S.C. § 101(24)(A): Definition of active service</p>
        <p>38 U.S.C. § 101(24)(B): ADT as active service only if disability incurred during ADT</p>
        <p>38 C.F.R. § 3.303: Service connection requirements</p>
      </div>
    </div>
  );
}

function CPExamDocument() {
  return (
    <div>
      <p className="text-center font-bold mb-6 text-slate-500 text-xs">
        DEPARTMENT OF VETERANS AFFAIRS<br />
        [VA Medical Center]<br />
        C&P EXAMINATION NOTE
      </p>

      <h3 className="font-bold text-lg mb-4 text-center">
        Mental Disorders (other than PTSD and Eating Disorders)<br />
        Disability Benefits Questionnaire
      </h3>

      <p className="mb-4 text-xs">
        DATE OF NOTE: MAR 13, 2019@10:30<br />
        AUTHOR: [EXAMINER NAME]<br />
        STATUS: COMPLETED
      </p>

      <p className="mb-4 font-bold">SECTION I: DIAGNOSIS</p>
      <p className="mb-2">
        <span className="font-semibold">Mental Disorder Diagnosis #1:</span> Unspecified Bipolar Disorder
      </p>
      <p className="mb-4">
        <span className="font-semibold">ICD code:</span> F31.9
      </p>

      <p className="mb-4 font-bold">SECTION II: OCCUPATIONAL AND SOCIAL IMPAIRMENT</p>
      <div className="mb-6 bg-purple-50 p-4 rounded border border-purple-200" id="cp-findings">
        <p className="mb-2" id="cp-citation-1">
          <span className="font-semibold">Level of Impairment:</span>{' '}
          <span className="bg-yellow-200">
            Occupational and social impairment with deficiencies in most areas, such as work, school, family relations, judgment, thinking and/or mood
          </span>
        </p>
      </div>

      <p className="mb-4 font-bold">SYMPTOMS</p>
      <div className="mb-4 text-sm">
        <p className="mb-1">☑ Depressed mood</p>
        <p className="mb-1">☑ Anxiety</p>
        <p className="mb-1">☑ Circumstantial, circumlocutory or stereotyped speech</p>
        <p className="mb-1">☑ Disturbances of motivation and mood</p>
        <p className="mb-1">☑ Difficulty in establishing and maintaining effective work and social relationships</p>
        <p className="mb-1">☑ Difficulty in adapting to stressful circumstances, including work or worklike setting</p>
      </div>

      <p className="mb-4 font-bold">BEHAVIORAL OBSERVATIONS</p>
      <p className="mb-4 text-sm">
        The veteran arrived early for his scheduled examination. He was accompanied by his wife. The veteran was using a wheelchair for ambulation. His manner of interaction was cooperative and courteous. Speech was normal in rate, rhythm, tone, and volume.{' '}
        <span className="bg-yellow-200">Thought processes were rambling, circumstantial, and tangential.</span>{' '}
        The veteran's mood was described as hopeless, his affect was fairly anxious.
      </p>

      <p className="mb-4 font-bold">EVIDENCE REVIEW</p>
      <p className="mb-2 text-sm">Evidence reviewed:</p>
      <p className="mb-1 text-sm">☑ VA e-folder</p>
      <p className="mb-1 text-sm">☑ CPRS</p>
      <p className="mb-4 text-sm">☑ Other: The veteran's wife of almost 40 years was present through much of the interview.</p>

      <p className="mb-4 font-bold">MEDICAL HISTORY</p>
      <p className="mb-4 text-sm">
        Review of service treatment records shows entry into US Air National Guard on April 9, 1972 with honorable discharge at rank of E2 on September 28, 1972. Medical examination dated November 4, 1973 marked "abnormal" for psychiatric evaluation.{' '}
        <span className="bg-yellow-200">
          History documents increased drug use including marijuana, LSD, and barbiturates, with initial use starting during basic training 1972.
        </span>{' '}
        Provisional diagnosis was "personality and behavior disorder."
      </p>

      <p className="mb-4 font-bold">CURRENT TREATMENT</p>
      <p className="mb-4 text-sm">
        Extensive treatment for mental health problems including bipolar disorder. Records indicate veteran was psychiatrically hospitalized in 2007 with diagnoses of bipolar 2 disorder, alcohol abuse, and personality disorder NOS. Current medication regimen includes divalproex, fluoxetine, and methylphenidate.
      </p>

      <p className="mb-4 font-bold">COMPETENCY</p>
      <p className="mb-4 text-sm">
        The Veteran is capable of managing his financial affairs: ☑ Yes
      </p>

      <p className="mb-4 font-bold">REMARKS</p>
      <p className="mb-4 text-sm text-slate-600">
        After extensive review of the veteran's C-file, I was unable to find evidence that mental health problems were occurring during basic training, but there were several pieces of evidence identifying the onset of various mental health issues including behavior problems, personality problems, and drug abuse during post basic training service in the National Guard.{' '}
        <span className="bg-yellow-200">
          The evidence available points to the onset or manifestation of the veteran's mental health issues occurring sometime between September 29, 1972 and November 4, 1973.
        </span>
      </p>

      <p className="mt-6 text-sm">
        /es/ [EXAMINER NAME]<br />
        Staff Psychologist<br />
        Signed: 03/13/2019 14:49
      </p>
    </div>
  );
}
