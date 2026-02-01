import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3 text-center">
        <p className="text-sm text-yellow-800 font-medium">
          ⚠️ This is a prototype and still under construction. Features and content may change.
        </p>
      </div>
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-slate-900">AI PPD Tools</h1>
            <p className="text-xs text-slate-600">AI tools for product designers</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="https://aiproductdesign.github.io/website/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">TETRA Project</a>
          <a href="#process" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Process</a>
          <a href="#tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Tools</a>
          <a href="#starter-kit" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Starter Kit</a>
          <a href="#case-studies" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Case Studies</a>
        </nav>
      </div>
    </header>
    </>
  );
}