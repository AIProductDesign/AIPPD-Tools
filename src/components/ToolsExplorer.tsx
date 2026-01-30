import { useState } from 'react';
import { aiTools } from '../data/aiTools';
import { designPhases } from '../data/designPhases';
import { Search, ExternalLink, Tag } from 'lucide-react';

interface ToolsExplorerProps {
  selectedPhase: string | null;
}

export function ToolsExplorer({ selectedPhase }: ToolsExplorerProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPhase = !selectedPhase || tool.phases.includes(selectedPhase);
    return matchesSearch && matchesPhase;
  });

  return (
    <section id="tools" className="max-w-7xl mx-auto px-6 py-20 bg-slate-50 rounded-3xl">
      <div className="mb-12">
        <h2 className="text-4xl mb-4 text-slate-900">AI Tools Directory</h2>
        <p className="text-slate-600 mb-8">
          {selectedPhase 
            ? `Showing tools for: ${designPhases.find(p => p.id === selectedPhase)?.name}`
            : 'Browse all AI tools or select a phase above to filter'}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
                <div className="flex items-center gap-2">
                  <Tag className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500">{tool.category}</span>
                </div>
              </div>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-slate-600 mb-4">{tool.description}</p>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 mb-2">Use Cases:</div>
                <div className="flex flex-wrap gap-1">
                  {tool.useCases.map((useCase, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-slate-500 mb-2">Design Phases:</div>
                <div className="flex flex-wrap gap-1">
                  {tool.phases.map((phaseId) => {
                    const phase = designPhases.find(p => p.id === phaseId);
                    return (
                      <span key={phaseId} className={`text-xs px-2 py-1 rounded text-white ${phase?.colorBadge}`}>
                        {phase?.shortName}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No tools found matching your criteria
        </div>
      )}
    </section>
  );
}
