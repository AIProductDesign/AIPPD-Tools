import { FileText, CheckSquare, Lightbulb, Download } from 'lucide-react';

const resources = [
  {
    title: 'Design Agent Templates',
    description: 'Ready-to-use templates for common AI agent design patterns in product development',
    icon: FileText,
    items: [
      'Research Agent Template',
      'Prototyping Assistant Template',
      'Design Critique Agent Template',
      'User Testing Analysis Template'
    ]
  },
  {
    title: 'Evaluation Checklist',
    description: 'Comprehensive checklist to assess AI agent quality, reliability, and user experience',
    icon: CheckSquare,
    items: [
      'Performance Metrics',
      'User Experience Guidelines',
      'Ethical Considerations',
      'Integration Requirements'
    ]
  },
  {
    title: 'Example Patterns',
    description: 'Proven design patterns and best practices for implementing AI agents in your workflow',
    icon: Lightbulb,
    items: [
      'Conversational Design Patterns',
      'Multi-Agent Collaboration',
      'Human-in-the-Loop Workflows',
      'Error Handling & Fallbacks'
    ]
  }
];

export function AgentDesignKit() {
  return (
    <section id="starter-kit" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-slate-900">Agent Design Starter Kit</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
          Everything you need to start designing and implementing AI agents in your product development workflow. 
          Designed specifically for Flemish SMEs, design agencies, and R&D partners to accelerate AI adoption and demonstrate measurable ROI.
        </p>
        <div className="inline-flex items-center gap-6 text-sm text-blue-600 bg-blue-50 px-6 py-3 rounded-full">
          <span className="font-semibold">Proven ROI:</span>
          <span>30% faster time-to-market</span>
          <span>•</span>
          <span>20-40% cost reduction</span>
          <span>•</span>
          <span>1.5+ quality improvement</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div 
              key={resource.title}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">{resource.title}</h3>
              <p className="text-slate-600 mb-4">{resource.description}</p>
              <ul className="space-y-2">
                {resource.items.map((item) => (
                  <li key={item} className="text-sm text-slate-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl mb-3">Download the Complete Starter Kit</h3>
        <p className="mb-6 text-blue-50 max-w-2xl mx-auto">
          Get instant access to all templates, checklists, and example patterns. 
          Start implementing AI agents in your design process today.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
          <Download className="w-5 h-5" />
          Download Starter Kit
        </button>
      </div>
    </section>
  );
}