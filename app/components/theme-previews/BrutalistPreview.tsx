'use client';

export function BrutalistPreview() {
  return (
    <div className="w-full h-full bg-white p-4 overflow-hidden">
      <div className="border-4 border-black p-4 h-full">
        <p
          className="text-[10px] uppercase tracking-widest mb-2 border-b-2 border-black pb-1"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          Personal Website
        </p>

        <h2
          className="text-2xl font-bold uppercase mb-4 leading-none"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          SCOTT CULLUM
        </h2>

        <div className="space-y-2 text-xs" style={{ fontFamily: 'Courier New, monospace' }}>
          <p className="border-l-4 border-black pl-2">
            [DESIGN]
          </p>
          <p className="border-l-4 border-black pl-2">
            [ENGINEERING]
          </p>
          <p className="border-l-4 border-black pl-2">
            [AI]
          </p>
        </div>

        <div className="mt-4 pt-2 border-t-2 border-black">
          <a
            href="#"
            className="text-xs underline decoration-2 underline-offset-4"
            style={{ fontFamily: 'Courier New, monospace' }}
            onClick={(e) => e.preventDefault()}
          >
            CLICK_HERE.HTML
          </a>
        </div>
      </div>
    </div>
  );
}
