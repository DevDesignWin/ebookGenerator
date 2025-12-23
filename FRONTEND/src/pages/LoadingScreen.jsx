import React from 'react';
import { BookOpen, Sparkles, PenTool } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Scoped Styles for Animations 
          (You can move these to index.css or tailwind.config.js in a production app)
      */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes loading {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(0.5); }
          100% { transform: scaleX(1); transform-origin: right; opacity: 0; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, #4f46e5 0%, #a5b4fc 50%, #4f46e5 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      {/* Main Loading Card */}
      <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl w-full max-w-sm mx-4">
        
        {/* Animated Icon Container */}
        <div className="relative mb-8 animate-float">
          {/* Glow Effect behind icons */}
          <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full scale-150"></div>
          
          {/* Main Book Icon */}
          <BookOpen size={64} className="text-indigo-600 relative z-10" strokeWidth={1.5} />
          
          {/* Floating Decorative Elements */}
          <Sparkles 
            size={24} 
            className="text-amber-400 absolute -top-4 -right-6 animate-pulse z-20" 
            fill="currentColor" 
          />
          <PenTool 
            size={20} 
            className="text-indigo-400 absolute -bottom-2 -left-6 rotate-45 z-20" 
          />
        </div>

        {/* Text with Shimmer Effect */}
        <h2 className="text-2xl font-semibold mb-2 animate-shimmer">
          Loading Editor...
        </h2>
        <p className="text-gray-400 text-sm mb-6">Preparing your creative space</p>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
          {/* The animation is defined in the style tag above as 'loading' */}
          <div 
            className="h-full bg-indigo-600 rounded-full w-full origin-left scale-x-0"
            style={{ animation: 'loading 2s ease-in-out infinite' }}
          ></div>
        </div>
      </div>
    </div>
  );
}