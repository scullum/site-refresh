'use client';

export function ArtDecoPreview() {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-6 overflow-hidden relative">
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#d4af37]" />
        <div className="absolute top-0 left-0 w-0.5 h-full bg-[#d4af37]" />
      </div>
      <div className="absolute top-3 right-3 w-8 h-8">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-[#d4af37]" />
        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#d4af37]" />
      </div>
      <div className="absolute bottom-3 left-3 w-8 h-8">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37]" />
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#d4af37]" />
      </div>
      <div className="absolute bottom-3 right-3 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#d4af37]" />
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#d4af37]" />
      </div>

      {/* Geometric pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon
            points="100,10 190,100 100,190 10,100"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1"
          />
          <polygon
            points="100,40 160,100 100,160 40,100"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1"
          />
          <polygon
            points="100,70 130,100 100,130 70,100"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center pt-4">
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Est. 2024
        </p>

        <h2
          className="text-2xl text-[#f5f0e6] mb-4 leading-tight"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Scott
          <br />
          Cullum
        </h2>

        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-[#d4af37]"
              style={{ transform: 'rotate(45deg)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
