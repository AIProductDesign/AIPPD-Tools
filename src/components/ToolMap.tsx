import { useState } from 'react';
import { aiTools } from '../data/aiTools';
import { designPhases } from '../data/designPhases';
import { toolPositions } from '../data/toolPositions';

interface ToolMapProps {
  onPhaseSelect: (phase: string | null) => void;
  selectedPhase: string | null;
  zoom: number;
}

export function ToolMap({ onPhaseSelect, selectedPhase, zoom }: ToolMapProps) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <svg viewBox="0 0 1200 600" className="w-full h-full">
      <defs>
        {/* Gradients for diamonds */}
        <linearGradient id="diamond1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
        </linearGradient>
        <linearGradient id="diamond2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.15)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
        </linearGradient>

        {/* Pattern for background */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="rgba(148, 163, 184, 0.1)" />
        </pattern>

        {/* Depth gradient */}
        <radialGradient id="depthGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
        </radialGradient>

        {/* Filters */}
        <filter id="toolShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background grid */}
      <rect width="1200" height="600" fill="url(#grid)" />

      {/* Decorative background elements */}
      {/* Subtle connecting lines suggesting flow */}
      <path
        d="M 100 300 Q 250 200, 400 250"
        stroke="rgba(59, 130, 246, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 100 300 Q 250 400, 400 350"
        stroke="rgba(59, 130, 246, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 500 300 Q 650 200, 800 250"
        stroke="rgba(147, 51, 234, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 500 300 Q 650 400, 800 350"
        stroke="rgba(147, 51, 234, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Decorative circles in background */}
      <circle cx="150" cy="150" r="40" fill="rgba(59, 130, 246, 0.03)" />
      <circle cx="450" cy="450" r="50" fill="rgba(99, 102, 241, 0.03)" />
      <circle cx="550" cy="150" r="45" fill="rgba(147, 51, 234, 0.03)" />
      <circle cx="850" cy="450" r="55" fill="rgba(236, 72, 153, 0.03)" />
      <circle cx="1000" cy="300" r="60" fill="rgba(34, 197, 94, 0.03)" />
      
      {/* Gradient overlays for depth */}
      <rect x="0" y="0" width="1200" height="600" fill="url(#depthGradient)" opacity="0.3" />

      {/* First Diamond */}
      <g className="transition-opacity" style={{ opacity: selectedPhase && !['discover', 'define'].includes(selectedPhase) ? 0.3 : 1 }}>
        <path
          d="M 100 300 L 300 100 L 500 300 L 300 500 Z"
          fill="url(#diamond1Gradient)"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="3"
        />
        
        {/* Discover phase label */}
        <g 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPhaseSelect(selectedPhase === 'discover' ? null : 'discover')}
        >
          <rect x="140" y="280" width="100" height="40" rx="8" fill="rgba(59, 130, 246, 0.9)" />
          <text x="190" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            Discover
          </text>
        </g>

        {/* Define phase label */}
        <g 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPhaseSelect(selectedPhase === 'define' ? null : 'define')}
        >
          <rect x="360" y="280" width="90" height="40" rx="8" fill="rgba(99, 102, 241, 0.9)" />
          <text x="405" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            Define
          </text>
        </g>
      </g>

      {/* Second Diamond */}
      <g className="transition-opacity" style={{ opacity: selectedPhase && !['ideate-prototype', 'test-validate'].includes(selectedPhase) ? 0.3 : 1 }}>
        <path
          d="M 500 300 L 700 100 L 900 300 L 700 500 Z"
          fill="url(#diamond2Gradient)"
          stroke="rgba(147, 51, 234, 0.4)"
          strokeWidth="3"
        />

        {/* Ideate & Prototype phase label */}
        <g 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPhaseSelect(selectedPhase === 'ideate-prototype' ? null : 'ideate-prototype')}
        >
          <rect x="540" y="280" width="130" height="40" rx="8" fill="rgba(147, 51, 234, 0.9)" />
          <text x="605" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            Ideate & Prototype
          </text>
        </g>

        {/* Test & Validate phase label */}
        <g 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPhaseSelect(selectedPhase === 'test-validate' ? null : 'test-validate')}
        >
          <rect x="720" y="280" width="140" height="40" rx="8" fill="rgba(236, 72, 153, 0.9)" />
          <text x="790" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            Test & Validate
          </text>
        </g>
      </g>

      {/* Launch Phase Area (After diamonds) */}
      <g className="transition-opacity" style={{ opacity: selectedPhase && selectedPhase !== 'launch' ? 0.3 : 1 }}>
        <rect
          x="900"
          y="150"
          width="200"
          height="300"
          rx="20"
          fill="rgba(34, 197, 94, 0.1)"
          stroke="rgba(34, 197, 94, 0.4)"
          strokeWidth="3"
        />
        
        <g 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onPhaseSelect(selectedPhase === 'launch' ? null : 'launch')}
        >
          <rect x="940" y="140" width="120" height="40" rx="8" fill="rgba(34, 197, 94, 0.9)" />
          <text x="1000" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            Launch
          </text>
        </g>
      </g>

      {/* Divider lines */}
      <line 
        x1="300" 
        y1="100" 
        x2="300" 
        y2="500" 
        stroke="rgba(148, 163, 184, 0.2)" 
        strokeWidth="2" 
        strokeDasharray="8,8" 
      />
      <line 
        x1="700" 
        y1="100" 
        x2="700" 
        y2="500" 
        stroke="rgba(148, 163, 184, 0.2)" 
        strokeWidth="2" 
        strokeDasharray="8,8" 
      />

      {/* Tool markers (render first, before tooltips) */}
      {aiTools.map((tool) => {
        const position = toolPositions[tool.id];
        if (!position) return null;

        const isFiltered = selectedPhase && !tool.phases.includes(selectedPhase);
        const isHovered = hoveredTool === tool.id;

        return (
          <g
            key={tool.id}
            transform={`translate(${position.x}, ${position.y})`}
            className="cursor-pointer transition-all"
            style={{ 
              opacity: isFiltered ? 0.2 : 1,
              pointerEvents: isFiltered ? 'none' : 'all'
            }}
            onMouseEnter={() => setHoveredTool(tool.id)}
            onMouseLeave={() => setHoveredTool(null)}
          >
            {/* Hover glow effect */}
            {isHovered && (
              <circle
                cx="0"
                cy="0"
                r="28"
                fill={`rgba(59, 130, 246, 0.2)`}
                className="animate-pulse"
              />
            )}

            {/* Tool logo circle with shadow */}
            <circle
              cx="0"
              cy="0"
              r="22"
              fill="white"
              stroke={isHovered ? '#3b82f6' : '#e2e8f0'}
              strokeWidth={isHovered ? '3' : '2'}
              filter="url(#toolShadow)"
              className="transition-all"
            />

            {/* Tool logo - using color circle as fake logo */}
            <circle
              cx="0"
              cy="0"
              r="16"
              fill={tool.logoColor || '#64748b'}
              opacity="0.9"
              className="pointer-events-none"
            />

            {/* Tool initials on logo */}
            <text
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="9"
              fontWeight="700"
              fill="white"
              className="pointer-events-none select-none"
            >
              {tool.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}
            </text>

            {/* Multi-phase indicator */}
            {tool.phases.length > 1 && (
              <circle
                cx="14"
                cy="-14"
                r="7"
                fill="#3b82f6"
                stroke="white"
                strokeWidth="2"
              >
                <title>{tool.phases.length} phases</title>
              </circle>
            )}
          </g>
        );
      })}

      {/* Tooltips layer (render on top) */}
      {aiTools.map((tool) => {
        const position = toolPositions[tool.id];
        if (!position || hoveredTool !== tool.id) return null;

        const isFiltered = selectedPhase && !tool.phases.includes(selectedPhase);
        if (isFiltered) return null;

        // Determine tooltip position to avoid going off-screen
        const tooltipX = position.x > 950 ? -250 : 30;
        const tooltipY = position.y < 100 ? 30 : -60;

        return (
          <g
            key={`tooltip-${tool.id}`}
            transform={`translate(${position.x}, ${position.y})`}
            className="pointer-events-none"
          >
            <rect
              x={tooltipX}
              y={tooltipY}
              width="220"
              height="105"
              rx="8"
              fill="white"
              stroke="#e2e8f0"
              strokeWidth="2"
              filter="url(#toolShadow)"
            />
            
            {/* Using foreignObject for proper text wrapping */}
            <foreignObject
              x={tooltipX}
              y={tooltipY}
              width="220"
              height="105"
            >
              <div xmlns="http://www.w3.org/1999/xhtml" style={{
                padding: '10px',
                fontSize: '12px',
                lineHeight: '1.4',
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  fontWeight: '600', 
                  color: '#0f172a',
                  marginBottom: '3px',
                  fontSize: '13px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {tool.name}
                </div>
                <div style={{ 
                  color: '#64748b',
                  fontSize: '10px',
                  marginBottom: '5px'
                }}>
                  {tool.category}
                </div>
                <div style={{ 
                  color: '#64748b',
                  fontSize: '9px',
                  lineHeight: '1.3',
                  marginBottom: '5px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {tool.description}
                </div>
                <div style={{ 
                  color: '#94a3b8',
                  fontSize: '8px',
                  fontWeight: '600',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {tool.useCases.slice(0, 2).join(' • ')}
                </div>
              </div>
            </foreignObject>
          </g>
        );
      })}

      {/* Legend text */}
      <text x="300" y="50" textAnchor="middle" fontSize="16" fontWeight="600" fill="#3b82f6">
        Problem Space
      </text>
      <text x="700" y="50" textAnchor="middle" fontSize="16" fontWeight="600" fill="#9333ea">
        Solution Space
      </text>
      <text x="1000" y="570" textAnchor="middle" fontSize="14" fontWeight="600" fill="#22c55e">
        Market Ready
      </text>
    </svg>
  );
}