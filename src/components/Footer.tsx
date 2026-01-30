import { Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import ghentLogo from "figma:asset/5ff2c54e1e42a151910fb946da42c3864eff1284.png";
import antwerpLogo from "figma:asset/1cb2ac71f09b11e719653dac260438a910c5bd79.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">AI PPD Tools</h3>
                <p className="text-xs text-slate-600">AI tools for product designers</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-md mb-6">
              A joint research initiative by Ghent University and University of Antwerp to accelerate AI adoption in Flemish SMEs and manufacturing companies.
            </p>
            <div className="flex items-center gap-4">
              <img src={ghentLogo} alt="Ghent University" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={antwerpLogo} alt="University of Antwerp" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#process" className="text-slate-600 hover:text-slate-900">Design Process</a></li>
              <li><a href="#tools" className="text-slate-600 hover:text-slate-900">Browse Tools</a></li>
              <li><a href="#starter-kit" className="text-slate-600 hover:text-slate-900">Starter Kit</a></li>
              <li><a href="#case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/AIProductDesign" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/ua-product-development/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:jelle.saldien@uantwerpen.be" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
          <p>© 2026 AI Powered Product Design TETRA Project (UAntwerpen - UGent). In preparation with VLAIO.</p>
        </div>
      </div>
    </footer>
  );
}