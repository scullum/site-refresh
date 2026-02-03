'use client';

export function ModernPreview() {
  return (
    <div className="w-full h-full bg-[#fafafa] p-6 overflow-hidden">
      <div className="h-full flex flex-col">
        <p
          className="text-[10px] uppercase tracking-[0.2em] text-[#ea580c] mb-3 font-semibold"
          style={{ fontFamily: 'Manrope, -apple-system, sans-serif' }}
        >
          Creative Technologist
        </p>

        <h2
          className="text-2xl font-semibold text-[#171717] leading-tight mb-4"
          style={{ fontFamily: 'Manrope, -apple-system, sans-serif' }}
        >
          Scott Cullum
        </h2>

        <p
          className="text-sm text-[#525252] leading-relaxed mb-4 flex-grow"
          style={{ fontFamily: 'Manrope, -apple-system, sans-serif' }}
        >
          Design, engineering, and AI-native product development.
        </p>

        <div
          className="inline-flex items-center gap-2 text-xs text-[#171717] border-b border-[#171717] pb-1 self-start group cursor-pointer"
          style={{ fontFamily: 'Manrope, -apple-system, sans-serif' }}
        >
          <span className="uppercase tracking-wide font-medium">View work</span>
          <svg
            className="w-3 h-3 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
