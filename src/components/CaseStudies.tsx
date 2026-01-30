import { caseStudies } from '../data/caseStudies';
import { ArrowRight, Building2, Users, TrendingDown, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';
import nikoImage from 'figma:asset/3e53c4294bb74bd22568b353587f5ce5947e66ce.png';
import novyImage from 'figma:asset/6b835603a11294be85a8abb2a5af735e899d4385.png';

// Map case study IDs to imported images
const caseStudyImages: Record<string, string> = {
  'iot-prd-sprint': nikoImage,
  'cmf-rendering-sprint': novyImage,
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-slate-900">Case Studies</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-2">
          10 real-world design challenges completed by students from Ghent University and the University of Antwerp using structured AI interventions. These projects resulted in 100+ detailed case cards documenting specific outcomes, methodologies, and ROI metrics.
        </p>
        <p className="text-sm text-blue-600 max-w-2xl mx-auto">
          Average time savings: 30% • Quality improvement: +1.5/5 • Rework reduction: 20%
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies.map((study, index) => (
          <div key={study.id} className="group bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all overflow-hidden">
            {/* Image Header */}
            <div className="relative aspect-[32/9] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              <img 
                src={caseStudyImages[study.id] || study.image} 
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                {index + 1}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-slate-700">
                {study.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="mb-4">
                <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{study.domain}</p>
                <div className="flex items-center gap-1 text-xs text-blue-600">
                  <GraduationCap className="w-3 h-3" />
                  <span>{study.university} • {study.program}</span>
                </div>
              </div>

              {/* NPD Phase */}
              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="text-xs text-slate-500 mb-1">NPD Phase</div>
                <div className="text-sm text-slate-900">{study.npdPhase}</div>
              </div>

              {/* Focus Area */}
              <div className="mb-4">
                <div className="text-xs text-slate-500 mb-1">Focus Area</div>
                <div className="text-sm text-slate-700 leading-relaxed">{study.focusArea}</div>
              </div>

              {/* Companies */}
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <Building2 className="w-3 h-3" />
                    Owner
                  </div>
                  <div className="text-sm font-medium text-slate-900">{study.owner}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <Users className="w-3 h-3" />
                    Peers
                  </div>
                  <div className="text-xs text-slate-700">{study.peers.join(', ')}</div>
                </div>
              </div>

              {/* AI Workflow */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-xs font-medium text-blue-900 mb-1">AI Workflow</div>
                <div className="text-xs text-blue-800 leading-relaxed">{study.workflow}</div>
              </div>

              {/* AI Tools Used */}
              <div className="mb-4">
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                  <Sparkles className="w-3 h-3" />
                  AI Tools Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.aiTools.map((tool, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-md font-medium border border-purple-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-4">
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                  <CheckCircle2 className="w-3 h-3" />
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.deliverables.map((item, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                  <TrendingDown className="w-3 h-3" />
                  Success Metrics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {study.kpis.map((kpi, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors py-2 hover:bg-blue-50 rounded-lg group">
                  View full template
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-slate-700 transition-colors py-2 hover:bg-slate-50 rounded-lg group">
                  View case cards [{study.cardCount}]
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Info Footer */}
      <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Reusable Case Study Template</h3>
          <p className="text-sm text-slate-700 mb-4">
            Each case follows a standardized structure: Context, Problem Statement, AI Intervention, 
            Deliverables, Success Metrics, Governance & Scaling, and Definition of Done
          </p>
          <button className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Template
          </button>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-600">
            <span className="px-3 py-1 bg-white rounded-full">Baseline + Target KPIs</span>
            <span className="px-3 py-1 bg-white rounded-full">Audit Trail Required</span>
            <span className="px-3 py-1 bg-white rounded-full">≥2 Peer Reviews</span>
            <span className="px-3 py-1 bg-white rounded-full">Governance Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}