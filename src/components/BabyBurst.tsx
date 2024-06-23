import React from 'react';

interface Props {
  pixels?: number;
  burstStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  translateX?: number;
  translateY?: number;
  inline?: boolean;
}

function BabyBurst({
  pixels = 400,
  burstStyle = {},
  wrapperStyle = {},
  translateX = -50,
  translateY = -50,
  inline = false,
}: Props) {
  return (
    <span
      className="relative inline overflow-visible text-center"
      style={{
        display: inline ? 'inline' : 'inline-block',
        ...wrapperStyle,
      }}
    >
      <span
        className="linear-gradient absolute text-center"
        style={{
          transform: `translate(${translateX}%, ${translateY}%)`,
          width: `${pixels}px`,
          height: `${pixels}px`,
          ...burstStyle,
        }}
      ></span>
    </span>
  );
}

export default BabyBurst;
