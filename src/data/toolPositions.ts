// Tool positions mapped to the double diamond SVG (viewBox: 0 0 1200 600)
// First diamond: x: 100-500, y: 100-500, center at 300,300
// Second diamond: x: 500-900, y: 100-500, center at 700,300
// Launch phase: x: 900-1100

export const toolPositions: Record<string, { x: number; y: number }> = {
  // Discover Phase (Left expanding part of first diamond)
  'userinterviews-ai': { x: 170, y: 280 },
  'dovetail': { x: 200, y: 220 },
  'otter-ai': { x: 180, y: 350 },
  'lookback': { x: 240, y: 320 },
  'crayon': { x: 220, y: 380 },
  
  // Define Phase (Right contracting part of first diamond)
  'chatgpt': { x: 340, y: 250 },
  'miro-ai': { x: 380, y: 300 },
  'claude': { x: 300, y: 210 },
  'notion-ai': { x: 360, y: 360 },
  'figjam-ai': { x: 320, y: 390 },
  
  // Ideate & Prototype Phase (Left expanding part of second diamond)
  'midjourney': { x: 560, y: 180 },
  'dall-e': { x: 600, y: 220 },
  'genius-sketch': { x: 540, y: 260 },
  'runway-ml': { x: 620, y: 280 },
  'autodesk-forma': { x: 580, y: 320 },
  'fusion360-ai': { x: 660, y: 200 },
  'solidworks-ai': { x: 640, y: 340 },
  'keyshot': { x: 560, y: 380 },
  'spline-ai': { x: 620, y: 360 },
  'gravity-sketch': { x: 540, y: 420 },
  'vizcom': { x: 600, y: 420 },
  'topologyai': { x: 660, y: 260 },
  'rhino-ai': { x: 580, y: 460 },
  'blender-ai': { x: 640, y: 460 },
  
  // Test & Validate Phase (Right contracting part of second diamond)
  'ansys-ai': { x: 760, y: 240 },
  'useberry': { x: 800, y: 280 },
  'maze': { x: 740, y: 320 },
  'sentiment-ai': { x: 820, y: 340 },
  'usertesting-ai': { x: 780, y: 370 },
  'hotjar': { x: 760, y: 410 },
  
  // Launch Phase (After second diamond)
  'manufactureai': { x: 950, y: 240 },
  'fictiv': { x: 1000, y: 200 },
  'xometry': { x: 920, y: 290 },
  'jasper-ai': { x: 1050, y: 260 },
  'copy-ai': { x: 980, y: 340 },
  'phrasee': { x: 1030, y: 380 },
  'packaging-ai': { x: 950, y: 380 },
  'supply-chain-ai': { x: 1020, y: 310 },
  'protolabs-ai': { x: 900, y: 340 },
  'canva-ai': { x: 1060, y: 420 },
};
