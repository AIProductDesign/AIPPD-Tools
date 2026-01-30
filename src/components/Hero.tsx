import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
          A Ghent University & University of Antwerp Initiative
        </div>
        <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
          AI Powerd Product Design toolkit
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          A comprehensive resource mapping AI-powered tools across the New Product Development (NPD) process—from discovery to launch. Built to ease AI adoption for Flemish design agencies and product development companies.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#process" 
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            AI-NPD Mapping
          </a>
          <a 
            href="#tools" 
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            Browse AI Tools
          </a>
          <a 
            href="#starter-kit" 
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            Agent Design Starter Kit
          </a>
          <a 
            href="#case-studies" 
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            View Case Studies
          </a>
        </div>
        <div className="mt-12 flex justify-center">
          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}