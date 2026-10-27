import { useRef, useState } from "react";

const BeforAfter = ({
  afterImage,
  beforeImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  const [position, setPosition] = useState<number>(50);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updatePosition(e);
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="w-1/4 h-66 rounded-xl touch-none cursor-ew-resize border-6 border-white shadow-xl relative aspect-video overflow-hidden "
      ref={containerRef}
    >
      {/* after image */}
      <div className="absolute inset-0  select-none touch-none">
        <img src={afterImage} className="size-full object-cover" />
      </div>
      {/* before image */}
      <div
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
        className="absolute inset-0  select-none touch-none "
      >
        <img
          src={beforeImage}
          className="size-full object-cover  select-none"
        />
      </div>
      {/* divider */}
      <div
        style={{
          left: `${position}%`,
        }}
        className="absolute h-full w-1 bg-neutral-100  shadow-[0_0_30px_15px_rgba(255,255,255,0.8)] "
      >
        <div className="flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs rounded-full bg-sky-500 p-2 shadow text-white shadow-neutral-300 leading-3 font-mono  font-semibold  absolute justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M12 22L8 18H16L12 22ZM12 2L16 6H8L12 2ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM2 12L6 8V16L2 12ZM22 12L18 16V8L22 12Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforAfter;
