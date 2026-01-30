import { useState, useRef } from 'react';
import { designPhases } from '../data/designPhases';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { ToolMap } from './ToolMap';

interface DoubleDiamondProps {
  onPhaseSelect: (phase: string | null) => void;
  selectedPhase: string | null;
}

export function DoubleDiamond({ onPhaseSelect, selectedPhase }: DoubleDiamondProps) {
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoom(Math.min(zoom + 0.2, 2));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.2, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsPanning(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl mb-4 text-slate-900">AI Tools Map</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-4">
          Explore the landscape of AI tools across the New Product Development (NPD) process. 
          Hover over tools to learn more, click to filter, or use zoom controls to explore.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Problem Space</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span>Solution Space</span>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={handleZoomOut}
          className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-5 h-5 text-slate-700" />
        </button>
        <button
          onClick={handleReset}
          className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          title="Reset View"
        >
          <Maximize2 className="w-5 h-5 text-slate-700" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      {/* Interactive Map Container */}
      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden border-2 border-slate-200"
        style={{ 
          height: '600px',
          cursor: isPanning ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isPanning ? 'none' : 'transform 0.2s ease-out',
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <ToolMap 
            onPhaseSelect={onPhaseSelect} 
            selectedPhase={selectedPhase}
            zoom={zoom}
          />
        </div>

        {/* Instructions overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs text-slate-600 pointer-events-none">
          Click and drag to pan • Hover tools for details • Click phase labels to filter
        </div>
      </div>

      {/* Phase Legend */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
        {designPhases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => onPhaseSelect(selectedPhase === phase.id ? null : phase.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedPhase === phase.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${phase.color}`}>
              <phase.icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">{phase.shortName}</h3>
            <p className="text-xs text-slate-500">{phase.toolCount} tools</p>
          </button>
        ))}
      </div>
    </section>
  );
}