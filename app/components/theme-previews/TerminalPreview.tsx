'use client';

import { useState, useEffect } from 'react';

export function TerminalPreview() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = '> ls -la portfolio/';

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <div className="w-full h-full bg-[#0a0a0a] p-6 font-mono text-[#00ff41] overflow-hidden relative">
      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
        }}
      />

      {/* CRT glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0,255,65,0.1)',
        }}
      />

      <div className="relative z-10 text-sm leading-relaxed">
        <p className="text-[#00aa2a] mb-2">scott@portfolio ~ $</p>
        <p className="mb-4">
          {typedText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
        </p>

        {typedText.length >= fullText.length && (
          <div className="space-y-1 animate-fadeIn">
            <p>drwxr-xr-x  design/</p>
            <p>drwxr-xr-x  engineering/</p>
            <p>drwxr-xr-x  ai-products/</p>
            <p className="text-[#00aa2a] mt-4">scott@portfolio ~ $</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}
