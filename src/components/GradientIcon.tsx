'use client';

interface Props {
  svgPath: string;
  gradientImagePath: string;
  maskImage: string;
  iconWidth?: number;
  iconHeight?: number;
}

const GradientIcon = ({
  svgPath,
  gradientImagePath,
  maskImage,
  iconWidth = 50,
  iconHeight = 50,
}: Props) => {
  return (
    <div
      className="icon-container"
      style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }}
    >
      <div
        className="gradient-bg"
        style={{
          backgroundImage: `url(${gradientImagePath})`,
          maskImage: `url(${maskImage})`,
          //   maskImage: "url('/close.svg')",
          width: `${iconWidth}px`,
          height: `${iconHeight}px`,
        }}
      ></div>
      <svg className="icon-mask" viewBox="0 0 24 24">
        <path d={svgPath} />
      </svg>
    </div>
  );
};

export default GradientIcon;
