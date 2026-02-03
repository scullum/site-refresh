'use client';

export function VaporwavePreview() {
  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)',
      }}
    >
      {/* Perspective grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: `
            linear-gradient(90deg, rgba(1,205,254,0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(1,205,254,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 20px',
          transform: 'perspective(200px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Sun */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full"
        style={{
          background: 'linear-gradient(180deg, #ff71ce 0%, #ff4dbd 50%, #01cdfe 100%)',
          boxShadow: '0 0 30px rgba(255,113,206,0.5), 0 0 60px rgba(255,113,206,0.3)',
        }}
      />

      {/* Horizontal lines through sun */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-1 bg-[#1a0a2e]"
            style={{ top: `${30 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-28 text-center">
        <h2
          className="text-xl font-bold mb-1"
          style={{
            fontFamily: 'Arial Black, sans-serif',
            color: '#ff71ce',
            textShadow: '0 0 10px #ff71ce, 0 0 20px #ff71ce, 0 0 30px #01cdfe',
          }}
        >
          SCOTT CULLUM
        </h2>
        <p
          className="text-xs tracking-[0.3em]"
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#01cdfe',
            textShadow: '0 0 5px #01cdfe',
          }}
        >
          DIGITAL DREAMS
        </p>
      </div>
    </div>
  );
}
