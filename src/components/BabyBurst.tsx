import React from 'react';

interface Props {
  width?: number;
  height?: number;
  burstStyle?: React.ComponentProps<'span'>['className'];
  wrapperStyle?: React.ComponentProps<'span'>['className'];
  translateX?: number;
  translateY?: number;
  inline?: boolean;
  wideMultiplier?: number;
  tallMultiplier?: number;
}

function BabyBurst({
  width = 300,
  height = 300,
  burstStyle = '',
  wrapperStyle = '',
  translateX = 0,
  translateY = 0,
  inline = false,
}: Props) {
  return (
    <span
      className={`relative inline h-0 w-0 overflow-visible text-center ${
        inline ? 'inline' : 'block'
      } ${wrapperStyle}`}
    >
      <span
        className={`linear-gradient absolute text-center ${burstStyle}`}
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></span>
    </span>
  );
}

export default BabyBurst;
