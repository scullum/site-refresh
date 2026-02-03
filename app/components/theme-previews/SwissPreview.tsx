'use client';

export function SwissPreview() {
  return (
    <div className="w-full h-full bg-white p-6 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10">
        {/* Red accent bar */}
        <div className="absolute top-0 right-0 w-16 h-full bg-[#ff0000]" />

        <div className="pr-20">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-black mb-4"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Portfolio
          </p>

          <h2
            className="text-3xl font-bold text-black leading-none mb-6"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Scott
            <br />
            Cullum
          </h2>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#ff0000]" />
              <span
                className="text-xs text-black uppercase tracking-wider"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
                Design
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black" />
              <span
                className="text-xs text-black uppercase tracking-wider"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
                Engineering
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#ff0000]" />
              <span
                className="text-xs text-black uppercase tracking-wider"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
                AI Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
