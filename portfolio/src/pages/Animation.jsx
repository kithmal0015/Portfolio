import React, { useState, useEffect } from 'react';

const EnhancedBackgroundAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 
  // Circuit Board Pattern
  const CircuitBoard = () => {
    const circuits = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      duration: Math.random() * 1500 + 1200 // much slower circuit
    }));

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {circuits.map((circuit) => (
          <g key={circuit.id}>
            <line
              x1={`${circuit.startX}%`}
              y1={`${circuit.startY}%`}
              x2={`${circuit.endX}%`}
              y2={`${circuit.endY}%`}
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animation: `circuitPulse ${circuit.duration}s infinite ease-in-out`
              }}
            />
            <circle
              cx={`${circuit.startX}%`}
              cy={`${circuit.startY}%`}
              r="2"
              fill="#60a5fa"
              className="animate-ping"
            />
            <circle
              cx={`${circuit.endX}%`}
              cy={`${circuit.endY}%`}
              r="2"
              fill="#ec4899"
              className="animate-ping"
              style={{ animationDelay: `${circuit.duration / 2}s` }}
            />
          </g>
        ))}
      </svg>
    );
  };

  // Interactive Light Orbs
  const InteractiveLightOrbs = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse follower orb */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-20 blur-2xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background: 'radial-gradient(circle, rgba(96,165,250,0.3) 0%, rgba(147,197,253,0.1) 50%, transparent 100%)'
          }}
        />
        
        {/* Static floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-52 h-52 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Layer 1: Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>
      
      {/* Layer 2: Interactive light orbs*/}
      <InteractiveLightOrbs /> 
      
    {/* Layer 4: Circuit board pattern */}
    <CircuitBoard />
      
      {/* CSS Animations */}
      <style>{`
        @keyframes circuitPulse {
          0%, 100% {
            stroke-opacity: 0.1;
            stroke-width: 1;
          }
          50% {
            stroke-opacity: 0.8;
            stroke-width: 2;
          }
        }     
      `}</style> 
    </div>
	);
}

export default EnhancedBackgroundAnimations;
