import React from 'react';

interface Props {
  pixels?: number;
}

function BabyBurst({ pixels = 400 }: Props) {
  const halfPixels = pixels / 2;
  return (
    <span className="relative">
      <span
        className={`linear-gradient absolute left-[-${halfPixels}px] top-[-${halfPixels}px] h-[${pixels}px] w-[${pixels}px] text-center`}
      ></span>
    </span>
  );
}

export default BabyBurst;
