import React from 'react';

interface Props {
  width?: number;
  height?: number;
  burstStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  translateX?: number;
  translateY?: number;
  inline?: boolean;
  wideMultiplier?: number;
  tallMultiplier?: number;
}

function BabyBurst({
  width = 300,
  height = 300,
  burstStyle = {},
  wrapperStyle = {},
  translateX = -50,
  translateY = -50,
  inline = false,
}: Props) {
  return (
    <span
      className="relative inline h-0 w-0 overflow-visible text-center"
      style={{
        display: inline ? 'inline' : 'inline-block',
        ...wrapperStyle,
      }}
    >
      <span
        className="linear-gradient absolute text-center"
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          width: `${width}px`,
          height: `${height}px`,
          ...burstStyle,
        }}
      ></span>
    </span>
  );
}

export default BabyBurst;
