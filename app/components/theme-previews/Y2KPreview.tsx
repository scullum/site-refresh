'use client';

export function Y2KPreview() {
  return (
    <div
      className="w-full h-full p-6 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #e8f4fc 0%, #c4e0f0 50%, #a8d0e6 100%)',
      }}
    >
      {/* Bubble decorations */}
      <div
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #87ceeb 50%, #4a90d9 100%)',
        }}
      />
      <div
        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #99ccff 50%, #6699ff 100%)',
        }}
      />

      <div className="relative z-10">
        <div
          className="rounded-3xl p-4 mb-4"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
            boxShadow: '0 4px 15px rgba(0,102,255,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          <p
            className="text-[10px] uppercase tracking-wider text-[#0066ff] mb-1"
            style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
          >
            Welcome to my site!
          </p>
          <h2
            className="text-xl font-bold text-[#1a1a2e]"
            style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
          >
            Scott Cullum
          </h2>
        </div>

        <div className="flex gap-2 flex-wrap">
          {['Design', 'Code', 'AI'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-xs text-white"
              style={{
                background: 'linear-gradient(180deg, #6699ff 0%, #0066ff 100%)',
                boxShadow: '0 2px 4px rgba(0,102,255,0.3)',
                fontFamily: 'Trebuchet MS, sans-serif',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
